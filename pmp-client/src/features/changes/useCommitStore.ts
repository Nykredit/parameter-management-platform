import { CommitStoreContext } from './commitStoreContext';
import { CommitStoreState } from './commitStore';
import { useContext } from 'react';
import { useStore } from 'zustand';

/**
 * Hook to access the store for the current commit
 *
 * @param selector An optional selector
 * @returns the selected state or actions
 */
const useCommitStore = <T>(selector: (state: CommitStoreState) => T): T => {
    const store = useContext(CommitStoreContext);
    if (!store) throw new Error('Missing BearContext.Provider in the tree');
    return useStore(store, selector);
};

export default useCommitStore;
