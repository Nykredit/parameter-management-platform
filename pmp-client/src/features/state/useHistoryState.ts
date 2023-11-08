import { useCallback, useReducer, useRef } from 'react';

interface UseHistoryState<T> {
    past: T[];
    present: T;
    future: T[];
}

enum UseHistoryStateActionType {
    UNDO = 'UNDO',
    REDO = 'REDO',
    SET = 'SET',
    CLEAR = 'CLEAR'
}

type UseHistoryStateAction<T> =
    | { type: UseHistoryStateActionType.UNDO }
    | { type: UseHistoryStateActionType.REDO }
    | { type: UseHistoryStateActionType.SET; newPresent: T }
    | { type: UseHistoryStateActionType.CLEAR; initialPresent: T };

const initialUseHistoryStateState = {
    past: [],
    present: null,
    future: []
};

const useHistoryStateReducer = <T>(state: UseHistoryState<T>, action: UseHistoryStateAction<T>) => {
    const { past, present, future } = state;

    if (action.type === UseHistoryStateActionType.UNDO) {
        return {
            past: past.slice(0, past.length - 1),
            present: past[past.length - 1],
            future: [present, ...future]
        };
    } else if (action.type === UseHistoryStateActionType.REDO) {
        return {
            past: [...past, present],
            present: future[0],
            future: future.slice(1)
        };
    } else if (action.type === UseHistoryStateActionType.SET) {
        const { newPresent } = action;

        if (action.newPresent === present) {
            return state;
        }

        return {
            past: [...past, present],
            present: newPresent,
            future: []
        };
    } else if (action.type === UseHistoryStateActionType.CLEAR) {
        return {
            ...initialUseHistoryStateState,
            present: action.initialPresent
        };
    } else {
        throw new Error('Unsupported action type');
    }
};

const useHistoryState = <T>(initialPresent: T) => {
    const initialPresentRef = useRef(initialPresent);

    const [state, dispatch] = useReducer(useHistoryStateReducer, {
        ...initialUseHistoryStateState,
        present: initialPresentRef.current
    });

    const canUndo = state.past.length !== 0;
    const canRedo = state.future.length !== 0;

    const undo = useCallback(() => {
        if (canUndo) {
            dispatch({ type: UseHistoryStateActionType.UNDO });
        }
    }, [canUndo]);

    const redo = useCallback(() => {
        if (canRedo) {
            dispatch({ type: UseHistoryStateActionType.REDO });
        }
    }, [canRedo]);

    const set = useCallback((newPresent: T) => dispatch({ type: UseHistoryStateActionType.SET, newPresent }), []);

    const clear = useCallback(
        () => dispatch({ type: UseHistoryStateActionType.CLEAR, initialPresent: initialPresentRef.current }),
        []
    );

    return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
};

export default useHistoryState;
