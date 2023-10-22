import { ThemeProvider } from 'rmwc';

/**
 * Adds theming to the app, depending on the current environment
 *
 * TODO: Add themeing
 */
const RMWCThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider options={{}}>{children}</ThemeProvider>;
};

export default RMWCThemeProvider;
