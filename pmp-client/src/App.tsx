import '@rmwc/theme/styles';
import '@rmwc/top-app-bar/styles';
import '@rmwc/button/styles';
import '@rmwc/icon/styles';

import { QueryProvider } from './features/network/query';
import RMWCComnponentProvider from './features/theme/RMWCComponentProvider';
import RMWCThemeProvider from './features/theme/RMWCThemeProvider';
import RootRouter from './routes/RootRouter';

function App() {
    return (
        <>
            <QueryProvider>
                <RMWCThemeProvider>
                    <RMWCComnponentProvider>
                        <RootRouter />
                    </RMWCComnponentProvider>
                </RMWCThemeProvider>
            </QueryProvider>
        </>
    );
}

export default App;
