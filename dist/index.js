'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var yargs_parser_1 = __importDefault(require('yargs-parser'))
var errors_1 = require('./errors')
var run_command_1 = require('./run-command')
var _a = yargs_parser_1.default(process.argv.slice(2)),
  _b = _a._,
  command = _b[0],
  args = _b.slice(1),
  help = _a.help,
  debug = _a.debug,
  options = __rest(_a, ['_', 'help', 'debug'])
var nothingToDo = !command
/* prettier-ignore */
if (help || nothingToDo) {
    console.info("mishell");
    console.info("Usage: mishell [command] [...args]");
    console.info("Options:");
    console.info("  --help         Show this help message.");
    console.info("  --debug        Display debug information.");
    process.exit(0);
}
run_command_1
  .runCommand(
    command,
    args,
    __assign({ debug: Boolean(debug), cwd: process.cwd() }, options)
  )
  .then(function () {
    process.exit(0)
  })
  .catch(function (error) {
    console.error('mishell:', errors_1.errors.unhandled.description)
    console.error(error)
    process.exit(errors_1.errors.unhandled.code)
  })
