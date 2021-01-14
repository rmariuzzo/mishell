'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.commands = void 0
var run_if_file_exist_1 = require('./run-if-file-exist')
exports.commands = [
  {
    name: 'run-if-file-exists',
    alias: 'rife',
    run: run_if_file_exist_1.runIfFileExist
  }
]
