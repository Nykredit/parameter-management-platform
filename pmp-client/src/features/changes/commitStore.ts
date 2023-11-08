import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Extendable type for parameter values.
 *
 * Will require changes if we want to support complex parameter values.
 */
export type ParameterValue = { toString(): string };

/**
 * A parameter change.
 *
 * The type of the parameter value is determined by the parameter key.
 */
export interface ParameterChange<T extends ParameterValue> {
    /** Parameter key */
    parameterKey: string;
    oldValue: T;
    newValue: T;
}

/**
 * A revert change.
 */
export interface Revert {
    commitReference: string;
}

/**
 * A change combining Parameterchange and Revert.
 */
export type Change<T extends ParameterValue = ParameterValue> = ParameterChange<T> | Revert;

/**
 * Internal state of the commit store
 */
interface State {
    changes: Change[];
    __past: Change[][];
    __future: Change[][];
}

/**
 * Allowed actions on the commit store
 */
interface Actions {
    addChange: (change: Change) => void;
    removeChange: (change: Change) => void;
    undo: () => void;
    redo: () => void;
    clear: () => void;
}

/**
 * The type of the store returned by createCommitStore.
 */
export type CommitStore = ReturnType<typeof createCommitStore>;

/**
 * The type of the state of the store returned by createCommitStore.
 */
export type CommitStoreState = State & Actions;

const initialState: State = {
    changes: [],
    __past: [],
    __future: []
};

/**
 * Creates a new commit store.
 *
 * @param storageKey Key used for local storage
 */
export const createCommitStore = (storageKey: string) => {
    return createStore<CommitStoreState>()(
        persist(
            (set, get) => ({
                ...initialState,
                addChange: (change) => {
                    set((s) => ({
                        changes: [...s.changes, change],
                        __past: [...s.__past, s.changes],
                        __future: []
                    }));
                },
                removeChange: (change) => {
                    const s = get();
                    const newChanges = s.changes.filter((c) => c !== change);

                    if (newChanges.length === s.changes.length) return;

                    set({
                        changes: newChanges,
                        __past: [...s.__past, s.changes],
                        __future: []
                    });
                },
                undo: () => {
                    if (get().__past.length === 0) return;

                    set((s) => ({
                        changes: s.__past[s.__past.length - 1],
                        __past: s.__past.slice(0, s.__past.length - 1),
                        __future: [s.changes, ...s.__future]
                    }));
                },
                redo: () => {
                    if (get().__future.length === 0) return;

                    set((s) => ({
                        changes: s.__future[0],
                        __past: [...s.__past, s.changes],
                        __future: s.__future.slice(1)
                    }));
                },
                clear: () => set(initialState)
            }),
            {
                name: storageKey
            }
        )
    );
};
