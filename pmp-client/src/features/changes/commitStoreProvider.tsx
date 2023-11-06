import { ReactNode, useEffect, useState } from 'react';

import { CommitStoreContext } from './commitStoreContext';
import { createCommitStore } from './commitStore';
import useEnvironment from '../environment/useEnvironment';

/**
 * Provider for the commit store. Handles creation of new stores if none exists.
 */
export const CommitStoreProvider = ({ children }: { children: ReactNode }) => {
    const { environment } = useEnvironment();
    const key = 'storage-key-' + environment;

    const [store, setStore] = useState(() => createCommitStore(key));

    // Avoid recreating the store on the first render
    useEffect(() => {
        console.log('Setting commit store key to', key);
        setStore(createCommitStore(key));
    }, [key]);

    return <CommitStoreContext.Provider value={store}>{children}</CommitStoreContext.Provider>;
};
