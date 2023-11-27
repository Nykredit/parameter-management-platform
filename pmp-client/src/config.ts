/** Redirect url base for AAD authentication. Used for both signin and singout */
export const AAD_REDIRECT_URI_BASE: string =
    (import.meta.env.VITE_AAD_REDIRECT_URI_BASE as string) ?? 'http://localhost:5173';

export const AAD_CLIENT_ID: string =
    (import.meta.env.VITE_AAD_CLIENT_ID as string) ?? 'f74350bc-51a5-4955-8fac-859d8cca13df';
