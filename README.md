# Dynaomdb migrations example

## Notes

* Run ```$ npm install -g npdynamodb``` to install this dependency globally
* Run ```$ npm install``` to install dependencies

```
Usage: npd [options] [command]

  Commands:

    init                                      Create a fresh npdfile.
    migrate:generate <name>                  Create a named migration file.
    migrate:run [options]                    Run all migrations that have not yet been run.
    migrate:rollback [options]               Rollback the last set of migrations performed.
    listTables [options]                    list all tables
    dump [options] <table>                   Dump specified table contents.
    desc <table>                             Show result of the describe operation
    get <table> <hashKey> [rangeKey]         Show results of the query operation
    dropTable <table>                        Drop the specified table.

```

### To run migrations:

* Be sure that you created .env and included all the following credential
	- DYNAMO_KEY
	- DYNAMO_SECRET
	- AWS_REGION
* Run ```$ npd migrate:run``` to run all migrations that have not yet been run.
* Check your AWS Dynamodb, and you should see all your tables as well as the npd_migrations tables

### Images:
![alt tag](https://s3-us-west-1.amazonaws.com/chris-testing-images/dynamodb-migration-example.png)



