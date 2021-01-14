import parseArgv from 'yargs-parser'

import { errors } from './errors'
import { runCommand } from './run-command'

const {
  _: [command, ...args],
  help,
  debug,
  ...options
} = parseArgv(process.argv.slice(2))

const nothingToDo = !command

/* prettier-ignore */
if (help || nothingToDo) {
  console.info(`mishell`)
  console.info(`Usage: mishell [command] [...args]`)
  console.info(`Options:`)
  console.info(`  --help         Show this help message.`)
  console.info(`  --debug        Display debug information.`)
  process.exit(0)
}

runCommand(
  command,
  args,
  {
    debug: Boolean(debug),
    cwd: process.cwd(),
    ...options,
  },
)
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('mishell:', errors.unhandled.description)
    console.error(error)
    process.exit(errors.unhandled.code)
  })
