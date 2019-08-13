import test from 'ava'
import stylelint from 'stylelint'
import tempWrite from 'temp-write'

const runStyleLint = (text, config = require('../')) => stylelint.lint({
  config,
  files: [tempWrite.sync(text)]
})

test('stylelint', async t => {
  const result = await runStyleLint('a { color: #000; }')

  t.is(JSON.parse(result.output)[0].warnings[0].rule, 'no-missing-end-of-source-newline')
})

test('stylelint / scss', async t => {
  const result = await runStyleLint('$color: #000;\n', require('../scss'))

  t.is(JSON.parse(result.output)[0].warnings[0].rule, 'scss/dollar-variable-default')
})
