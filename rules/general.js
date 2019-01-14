'use strict';

module.exports = {
    rules: {
        'indentation': [4, {
            baseIndentLevel: 1,
            indentClosingBrace: false,
            except: [],
            ignore: []
        }],
        'linebreaks': 'unix',
        'max-empty-lines': [1, {
            ignore: []
        }],
        'max-line-length': [120, {
            ignore: []
        }],
        'max-nesting-depth': [4, {
            ignore: ['blockless-at-rules', 'pseudo-classes'],
            ignoreAtRules: []
        }],
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-first-line': true,
        'no-empty-source': true,
        'no-eol-whitespace': [true, {
            ignore: []
        }],
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': true
    }
};
