pmp-component-tests
===============================

Service for testing features available in pmp-core


Build
---------------

    -DskipTests             - to skip Unit and Integration tests
    -DskipUTs               - to skip Unit tests
    -DskipITs               - to skip Integration tests

    mvn clean package       Build the project
    mvn clean verify        For running build, tests and integration tests

Useful Commands
---------------

Run the service with Cargo:

    mvn clean install -DskipTests && mvn -pl pmp-component-tests cargo:run

Table needed
---------------
```yaml
databaseChangeLog:
  - changeSet:
      id: 1
      author: nykredit
      changes:
        - createTable:
            tableName: PARAMETER_MANAGEMENT
            columns:
              - column:
                  name: ID
                  type: VARCHAR2(36)
                  constraints:
                    primaryKey: true
              - column:
                  name: NAME
                  type: VARCHAR2(255)
                  constraints:
                    unique: true
              - column:
                  name: TYPE
                  type: VARCHAR2(255)
              - column:
                  name: PVALUE
                  type: VARCHAR2(4000)
