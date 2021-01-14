import { Command } from '.'

type GitDefaultRemoteBranchOptions = {
  file: string | string[]
}

export const gitDefaultRemoteBranch: Command<GitDefaultRemoteBranchOptions> = async (
  args,
  opts
) => {}
