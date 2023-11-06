import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ParameterValue = { toString(): string };

/**
 * TODO: Move interfaces to a separate file.
 */
export interface ParameterChange<T extends ParameterValue> {
    /** Parameter key */
    parameterKey: string;
    oldValue: T;
    newValue: T;
}

export interface Revert {
    commitReference: string;
}

export type Change<T extends ParameterValue = ParameterValue> = ParameterChange<T> | Revert;

interface State {
    changes: Change[];
    __past: Change[][];
    __future: Change[][];
}

interface Actions {
    addChange: (change: Change) => void;
    removeChange: (change: Change) => void;
    undo: () => void;
    redo: () => void;
    clear: () => void;
}

const initialState: State = {
    changes: [],
    __past: [],
    __future: []
};

/**
 * Manages the state of the current commit.
 */
const useCurrentCommit = create<State & Actions>()(
    persist(
        (set, get) => ({
            ...initialState,
            addChange: (change) =>
                set((s) => ({
                    changes: [...s.changes, change],
                    __past: [...s.__past, s.changes],
                    __future: []
                })),
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
            name: 'current-commit'
        }
    )
);

export default useCurrentCommit;
