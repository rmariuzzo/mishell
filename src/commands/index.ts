import { runIfFileExist } from './run-if-file-exist'
import { gitDefaultRemoteBranch } from './git-default-remote-branch'
import { npmPreVersion } from './npm-pre-version'

export type GlobalOpts = {
  debug: boolean
  cwd: string
}

export type Args = ReadonlyArray<string>

export type Opts = Record<string, any>

export type Command<O extends Opts = any, R = any> = {
  (args: Args, opts: O & GlobalOpts): Promise<R>
}

/* prettier-ignore */
export const commands: ReadonlyArray<{
  name: string
  alias: string
  run: Command
}> = [
  { name: 'run-if-file-exists', alias: 'rife', run: runIfFileExist },
  { name: 'git-default-remote-branch', alias: 'gdrb', run: gitDefaultRemoteBranch },
  { name: 'npm-pre-version', alias: 'npv', run: npmPreVersion },
]
