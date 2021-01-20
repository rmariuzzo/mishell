import { gitCleanBranches } from './git-clean-branches'
import { gitDefaultRemoteBranch } from './git-default-remote-branch'
import { gitFetchPull } from './git-fetch-pull'
import { gitRefresh } from './git-refresh'
import { npmPreVersion } from './npm-pre-version'
import { runIfFileExist } from './run-if-file-exist'
import { updateNvmrc } from './update-nvmrc'

export type GlobalOpts = {
  debug: boolean
  cwd: string
}

export type Args = ReadonlyArray<string>

export type Opts = Record<string, any>

export type Command<O extends Opts = any, R = any> = {
  (args: Args, opts: keyof O extends never ? GlobalOpts : O & GlobalOpts): Promise<R>
}

/* prettier-ignore */
export const commands: ReadonlyArray<{
  name: string
  alias: string
  run: Command
}> = [
  { name: 'git-clean-branches', alias: 'gcb', run: gitCleanBranches },
  { name: 'git-default-remote-branch', alias: 'gdrb', run: gitDefaultRemoteBranch },
  { name: 'git-fetch-pull', alias: 'gfp', run: gitFetchPull },
  { name: 'git-refresh', alias: 'gr', run: gitRefresh },
  { name: 'npm-pre-version', alias: 'npv', run: npmPreVersion },
  { name: 'run-if-file-exists', alias: 'rife', run: runIfFileExist },
  { name: 'update-nvmrc', alias: 'un', run: updateNvmrc },
]
