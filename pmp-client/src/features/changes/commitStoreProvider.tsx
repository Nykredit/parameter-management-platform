import { ReactNode, useEffect, useState } from 'react';

import { CommitStoreContext } from './commitStoreContext';
import { createCommitStore } from './commitStore';
import useEnvironment from '../environment/useEnvironment';
import { useMsal } from '@azure/msal-react';

/**
 * Provider for the commit store. Handles creation of new stores if none exists.
 */
export const CommitStoreProvider = ({ children }: { children: ReactNode }) => {
    const { environment } = useEnvironment();
    const { accounts } = useMsal();
    const key = `storage-key-${environment}-${accounts[0].localAccountId}`;

    const [store, setStore] = useState(() => createCommitStore(key));

    // Avoid recreating the store on the first render
    useEffect(() => {
        setStore(createCommitStore(key));
    }, [key]);

    return <CommitStoreContext.Provider value={store}>{children}</CommitStoreContext.Provider>;
};
