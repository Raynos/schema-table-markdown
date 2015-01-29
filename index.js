'use strict';

var parseJSONSchema = require('json-schema-to-jsig');
var serializeJSIG = require('jsig/serialize');

module.exports = schemaTableMarkdown;

function schemaTableMarkdown(schemaTable) {
    var ops = Object.keys(schemaTable);
    var markdown = '# Schema documentation\n\n';

    for (var i = 0; i < ops.length; i++) {
        var op = ops[i];

        markdown += '## ' + op + '\n\n';

        var spec = schemaTable[op];
        var requestJSIG = toJSIGStr(spec.request);
        var responseJSIG = toJSIGStr(spec.response);

        markdown += '### Request spec\n\n';

        markdown += '```hs\n' + requestJSIG + '\n```\n\n';

        markdown += '### Response spec\n\n';

        markdown += '```hs\n' + responseJSIG + '\n```\n\n';
    }

    return markdown;
}

function toJSIGStr(schema) {
    return serializeJSIG(parseJSONSchema(schema));
}
