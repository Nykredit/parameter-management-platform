import { CommitStore } from './commitStore';
import { createContext } from 'react';

/**
 * Context for the commit store.
 */
export const CommitStoreContext = createContext<CommitStore | null>(null);
