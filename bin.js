#!/usr/bin/env node
/* eslint-disable */
try {
  // If ran with `npx` against the repo and dist are not available then it will
  // fails.
  require('./dist')
} catch {
  console.error(
    "mishell: can't be run right now, please try again in a few seconds..."
  )
  console.error(
    'mishell: if the problem persist check: https://github.com/DailyFeats/mishell/actions'
  )
  process.exit(9)
}
