# Logger

A simple, colorful logging utility for Node.js applications.

## Installation

```bash
npm install @micro.builder.io/logger
```

## Usage

Import the Logger class:

```typescript
import { Logger } from "@micro.builder.io/logger";
```

### Basic Logging

```typescript
Logger.logg("Hello, world!");
Logger.error("An error occurred");
Logger.info("Here's some information");
Logger.warn("This is a warning");
Logger.debug("Debugging information");
Logger.success("Operation successful");
```

### Returning Colored Strings

```typescript
const greenText = Logger.loggReturn("This text will be green");
const redText = Logger.errorReturn("This text will be red");
```

### Logging JSON Objects

```typescript
const user = { name: "John Doe", age: 30 };
Logger.loggJSON(user);
Logger.errorJSON(user);
Logger.infoJSON(user);
Logger.warnJSON(user);
Logger.debugJSON(user);
Logger.successJSON(user);
```

### Multiple Arguments

typescript
Logger.info("User", "John Doe", "logged in at", new Date());

## Color Scheme

- `logg` and `success`: Green
- `error`: Red
- `info`: Blue
- `warn`: Yellow
- `debug`: Magenta

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
