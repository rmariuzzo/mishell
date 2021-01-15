import { Command } from '.'
import { gitCleanBranches } from './git-clean-branches'
import { gitFetchPull } from './git-fetch-pull'

type GitRefreshOptions = {
  remote: string
  force: boolean
}

export const gitRefresh: Command<GitRefreshOptions> = async (args, opts) => {
  await gitCleanBranches(args, opts)
  await gitFetchPull(args, opts)
}
