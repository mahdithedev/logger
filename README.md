# `@pyle_of_mail/logger`

## Description

Minimal and basic logger written in NodeJS.

## Roadmap

- [x] Logging to the console with log levels defined in env vars
- [x] Color coded messages based on severity
- [ ] Option to prefix all log messages by a timestamp
- [ ] Logging to a file
- [ ] Logging to an external log server

## Quickstart Guide

### Installing the package

```bash
npm install @pyle_of_mail/logger
```

### Setting the log level

There are 4 main types of log messages in this class:

|  Type   |                                       Description                                        |                  Printed                   |
| :-----: | :--------------------------------------------------------------------------------------: | :----------------------------------------: |
|  error  |                Used to log problems that require code execution to stop.                 |                   Always                   |
| warning |             Used to log problems that do not require code execution to stop.             | `LOG_LEVEL` in `["warn", "debug", "info"]` |
|  info   | Used to print generic informational messages. Informs the user on the actions performed. |     `LOG_LEVEL` in `["debug", "info"]`     |
|  vars   |  Used to print variables to the console. Mainly intended for development and debugging.  |         `LOG_LEVEL` in `["info"]`          |

### Logging to the console

The logger class will print all your messages to the console by default.

#### Importing the package

```node
import { Logger } from "@pyle_of_mail/logger";
```

#### Logging error messages

> Error messages will always be printed to the console, regardless of the `LOG_LEVEL` defined in `.env`.

```javascript
Logger.logError(
  "This is an error message. Not only is this printed in red, but it throws an error and stops code execution."
);
```

#### Logging warning messages

> Warning messages will only be printed if the `LOG_LEVEL` is set to `warn`, `info` or `debug`.

```javascript
Logger.logWarn(
  "This is a warning message, and it should be printed in yellow. This probably means something went wrong, but not wrong enough as to quit execution."
);
```

#### Logging info messages

> Info messages will only be printed if the `LOG_LEVEL` is set to `info` or `debug`.

```javascript
Logger.logInfo("This is an info message, and it should be printed in green.");
```

#### Printing variables to the screen

> Variables will only be printed if the `LOG_LEVEL` is set to `debug`.

```javascript
// execute some code
const response = some_function(some_param);

// log the output
Logger.logVar(response);
```

### Logging to a file

Not yet supported, planned for release `1.1.0`.

### Logging to a syslog server

Not yet supported, planned for release `1.2.0`.

## License

This code is licensed under the [MIT License](./LICENSE).
