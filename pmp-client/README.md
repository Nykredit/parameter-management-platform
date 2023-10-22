**CURRENTLY ALL UI IS ONLY TO SHOW OFF REACT. IT IS CARTOONISHLY UGLY ON PURPOSE, TO NOT INFLUENCE ACTUAL DESIGN CHOICES**

# PMP Client

Web client for the PMP project.

## Development

The client is set up to follow Nykredit's frontend stack, as presented at a DEB guest lecture in oktober 2023. The key libraries are [React](https://react.dev/), [React Router](https://reactrouter.com/en/main), and [RMWC](https://rmwc.io/), utilising [Tanstack Query](https://tanstack.com/query/latest) for data fetching and [MSAL React](https://github.com/AzureAD/microsoft-authentication-library-for-js) for authentication.

Currently unused technologies from Nykredt's stack include [React Hook Form](https://react-hook-form.com/) for form handling, and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

In addition to Nykredit's stack, [Tailwindcss](https://tailwindcss.com/) is used for consistent styling, and the native fetch is replaced with [axios](https://axios-http.com/) for better pairing with Tanstack Query.

### Structure

| Directory      | Description                                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public`       | Static files.                                                                                                                                                                    |
| `src`          | Source code.                                                                                                                                                                     |
| `src/assets  ` | Assets which should be inlined in source code.                                                                                                                                   |
| `src/features` | Reusable react hooks and components.                                                                                                                                             |
| `src/routes`   | Routing and pages. Directory structure aims to mimic the corresponding routing segments.<br>Unlike `src/features`, components written here serve a single, non-reusable purpose. |
| `src/types`    | Types and type predicates used globally across the app. Local types are defined where they are used.                                                                             |
| `src/utils`    | General utility functions which do not fit anywhere else, e.g. `capitalizeFirstLetter()`                                                                                         |

### Notes on dependencies

RMWC [recommends installing components individually](https://rmwc.io/installation). This has not been done in this project, to ease development for developers not familiar with using component frameworks. This means that the bundle size is larger than it could be, but as the client is not customer facing, this is not a priority. Likewise, ESLint rules for tree shaking are not enabled, and RMWC style sheets are all imported in `src/app.tsx`.

RMWC also doesn't properly support react 18 strict mode, which as such has been disabled in `src/index.ts`

### Naming conventions

File names should directly reflect the names of its contents. In general, this means naming the file after the default export, e.g. `src/features/MyComponent.tsx` exports `MyComponent`.

-   Components and component files are named in PascalCase, e.g. `src/features/MyComponent.tsx`
-   Pages and page files are named in PascalCase with the `Page` suffix, e.g. `src/routes/MyPage.tsx`
-   Hooks and hook files are named in camelCase with the `use` prefix, e.g. `src/features/useMyHook.ts`

Directories are preferably named in all lower case, though exceptions for multiple words are allowed, e.g. `src/features/myFeature`. Directories in `src/routes` are however always named in all lower case to reflect the corresponding route, e.g. `src/routes/myroute`.
