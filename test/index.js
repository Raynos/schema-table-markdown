'use strict';

var test = require('tape');

var schemaTableMarkdown = require('../index.js');

test('schemaTableMarkdown is a function', function t(assert) {
    assert.equal(typeof schemaTableMarkdown, 'function');
    assert.end();
});
