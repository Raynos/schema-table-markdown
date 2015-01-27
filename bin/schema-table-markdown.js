#!/usr/bin/env node
'use strict';

var jsonBody = require('body/json');
var parseArgs = require('minimist');
var process = require('process');
var console = require('console');

var toMarkdown = require('../index.js');

module.exports = main;

if (require.main === module) {
    main(parseArgs(process.argv.slice(2)));
}

function main() {
    jsonBody(process.stdin, onBody);

    function onBody(err, schemaTable) {
        if (err) {
            throw err;
        }

        var markdown = toMarkdown(schemaTable);
        process.stdout.write(markdown);
    }
}
