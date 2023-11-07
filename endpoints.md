# Endpoints

## Shared types

```ts
type ISODate = ISO-DATETIME-STRING; // 2019-01-14T00:00:00Z

interface ParameterChange<T> {
    parameterName: string;
    oldValue: T;
    newValue: T;
}

interface Revert {
    commitHash: string;
}

// These are BS
enum ParameterType {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
}

// These are BS
enum Environment {
    Production = 'production',
    Development = 'development',
}
```

## Tracker

GET `pmp/services`

Response body:

```ts
interface ServiceResponse {
  services: {
    name: string;
    address: string;
    environment: Environment;
  }[];
}
```

## Lib

### parameters

GET `pmp/parameters`

Response body:

```ts
interface ParameterResponse {
  parameters: Array<{
    id: string;
    name: string;
    type: ParameterType;
    value: T;
  }>;
}
```

### Commit

POST `pmp/commit`

Request body:

```ts
interface PostCommit {
  pushDate: ISODate;
  services: [
    {
      serviceName: string;
      changes: {
        reverts: Revert[];
        parameterChanges: ParameterChange[];
      };
    }
  ];
}
```

### Log

GET `pmp/log?query=...`

Response:

```ts
interface LogResponse {
    serviceName?: string;
    commits: Array<{
        hash: string;
        pushDate: ISO-DATETIME-STRING; // 2019-01-14T00:00:00Z
        email: string;
        changes: {
            reverts: Revert[];
            parameterChanges: ParameterChange[];
        };
    }>
}
```
