'use strict';
var assert = require('assert');
var Jumi = require('./');
var tests = require('./tests.json');

describe('Jumi', function() {
    tests.forEach(function(test) {
        it(test.name, function() {
            if (test.type == 'equal') {
                assert.equal(Jumi.jsonToHtml(test.json), test.html);
            } else if (test.type == 'fail') {
                assert.throws(()=>Jumi.jsonToHtml(test.json), Error);
            }
        })
    });
});
