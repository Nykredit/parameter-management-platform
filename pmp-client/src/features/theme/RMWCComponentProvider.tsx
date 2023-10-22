import { RMWCProvider } from 'rmwc';

/** Global configuration of RMWC components */
const RMWCComnponentProvider = ({ children }: { children: React.ReactNode }) => {
    return <RMWCProvider>{children}</RMWCProvider>;
};

export default RMWCComnponentProvider;
