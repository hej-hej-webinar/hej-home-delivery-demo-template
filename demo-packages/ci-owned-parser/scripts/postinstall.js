const fs = require("node:fs");
const path = require("node:path");

const markerPath = path.join(__dirname, "..", "ci-owned.txt");
const content = `ci-owned-parser postinstall ran at ${new Date().toISOString()}\n`;

fs.writeFileSync(markerPath, content, { encoding: "utf8" });
console.log("ci-owned-parser postinstall marker written");