import { Command } from './command'
import { runIfFileExist } from './run-if-file-exist'

export const allCommands: ReadonlyArray<{
  name: string
  alias: string
  run: Command
}> = [{ name: 'run-if-file-exists', alias: 'rife', run: runIfFileExist }]
