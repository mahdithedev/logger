---
title: Getting Started
summary: >-
  A guide showing you a quick overview of the provided features and how to use them.

authors:
  - Anton Mircea-Pavel

date: 2020-03-19
---

## Installing the package

```bash
npm install @pyle_of_mail/logger
```

## Importing the package

```node
import * as Logger from "@pyle_of_mail/logger";
```

## Logging error messages

```javascript
Logger.logError(
  "This is an error message. Not only is this printed in red, but it throws an error and stops code execution."
);
```

For more information on setting the log levels, see the [Configuration Options](./configuration-options.md) page.

## Logging warning messages

```javascript
Logger.logWarn(
  "This is a warning message, and it should be printed in yellow. This probably means something went wrong, but not wrong enough as to quit execution."
);
```

For more information on setting the log levels, see the [Configuration Options](./configuration-options.md) page.

## Logging info messages

```javascript
Logger.logInfo("This is an info message, and it should be printed in green.");
```

For more information on setting the log levels, see the [Configuration Options](./configuration-options.md) page.

## Logging debug messages

```javascript
// execute some code
const response = some_function(some_param);

// log the output
Logger.logVar(response);
```

Say you want to obfuscate a variable when printing it to the console. It may be an access token or something. Say you want only the first `n` letters in clear and then you want it obfuscated. The `logger` package includes an `obfuscate()` method you can use:

```javascript
const TOKEN = "my-super-secret-token";

Logger.logVar(obfuscate(TOKEN, 5));
```

The above example will leave the first 5 characters in clear and then obfuscate the rest, producing:

```bash
my-su**************
```
