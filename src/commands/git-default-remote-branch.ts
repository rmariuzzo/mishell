import execa from 'execa'
import { Command } from '.'
import { AppError, ErrorCode } from '../errors'

const defaultRemote = 'origin'
const headBranchMatcher = /HEAD branch: (?<branch>.+)/

type GitDefaultRemoteBranchOptions = {
  remote: string
  silent: boolean
}

export const gitDefaultRemoteBranch: Command<GitDefaultRemoteBranchOptions, string> = async (
  args,
  opts
) => {
  const remote = opts.remote ?? defaultRemote
  const { stdout } = await execa('git', ['remote', 'show', remote])

  const branch = stdout.match(headBranchMatcher)?.groups?.branch

  if (!branch) {
    throw new AppError(
      ErrorCode.notFound,
      `git default remote branch not found for remote: ${remote}`
    )
  }

  if (!opts.silent) {
    console.log(branch)
  }

  return branch
}
