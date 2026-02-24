# date2oid

[![npm version](https://img.shields.io/npm/v/date2oid.svg)](https://www.npmjs.com/package/date2oid)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Utility to convert a JavaScript Date or date string to a valid MongoDB `ObjectId` string, allowing you to use timestamps in the typical ObjectId structure.

This is extremely useful when doing custom querying by date, simulating historic data, or manually creating fake database entries that need a valid ObjectId but also need to represent a specific timestamp.

## Installation

You can install `date2oid` as a dependency in your project or simply run it directly via `npx`.

```bash
# npm
npm install date2oid

# pnpm
pnpm add date2oid

# yarn
yarn add date2oid
```

## CLI Usage

You can use this directly from your terminal using `npx`, by providing the date as an argument. Note that the command name is `date-to-oid`.

```bash
$ npx date-to-oid "2024-01-01T00:00:00Z"
65920a800000000000000000

$ npx date-to-oid "October 13, 2026 11:13:00"
691d0e5c0000000000000000
```

*Note: You can pass any string format that the standard JavaScript `new Date()` construction supports!*

## API Usage

You can import the core function and use it inside your code. It accepts any valid date value (string, number, or Date object) and returns the standard 24-character hexadecimal ObjectId string.

```javascript
import createObjectIdFromDate from "date2oid";

// From an ISO date string
const objectId1 = createObjectIdFromDate("2024-01-01T00:00:00Z");
console.log(objectId1); // -> "65920a800000000000000000"

// From a Date object
const myDate = new Date("2026-02-23T12:00:00Z");
const objectId2 = createObjectIdFromDate(myDate);
console.log(objectId2); // -> "692de7800000000000000000"

// From a UNIX timestamp in milliseconds
const objectId3 = createObjectIdFromDate(1730000000000); 
console.log(objectId3); // -> "671cc0000000000000000000"
```

## How it works

A typical MongoDB `ObjectId` consists of 12 bytes (24 hexadecimal characters). The first 4 bytes (8 hex characters) represent the seconds since the Unix epoch. This library calculates the UNIX timestamp (in seconds) of your provided date, converts it to a hexadecimal string, and pads the remaining 16 characters with zeroes to give you a completely valid 24-character ObjectId. 

## Requirements
- Node.js >= 24.13.0

## License

[ISC](LICENSE)
