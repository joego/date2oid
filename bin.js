#!/usr/bin/env node

// Usage: npx date2oid <date>

import createObjectIdFromDate from "./index.js";

const date = process.argv[2];
if (!date) {
  console.error("Missing the date parameter!");
  process.exit(1);
}

console.log(createObjectIdFromDate(date));
