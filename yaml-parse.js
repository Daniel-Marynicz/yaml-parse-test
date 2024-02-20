#!/bin/env node

const YAML = require('yaml')
const fs = require("fs");
const yaml = fs.readFileSync("example.yaml", { encoding: 'utf8', flag: 'r' });

yamlObject = YAML.parse(yaml, { mapAsMap: true, maxAliasCount: 440 });
