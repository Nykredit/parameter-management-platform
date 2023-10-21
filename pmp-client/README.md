# PMP Client

Web client for the PMP project.

## Development

The client is set up to follow Nykredit's frontend stack, as presented at a DEB guest lecture in oktober 2023. The key libraries are [React](https://react.dev/), [React Router](https://reactrouter.com/en/main), and [RMWC](https://rmwc.io/), utilising [Tanstack Query](https://tanstack.com/query/latest) for data fetching and [MSAL React](https://github.com/AzureAD/microsoft-authentication-library-for-js) for authentication.

Currently unused technologies from Nykredt's stack include [React Hook Form](https://react-hook-form.com/) for form handling, and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

In addition to Nykredit's stack, [Tailwindcss](https://tailwindcss.com/) is used for consistent styling, and the native fetch is replaced with [axios](https://axios-http.com/) for better pairing with Tanstack Query.

### Structure
