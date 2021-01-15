import execa from 'execa'
import { Command } from '.'
import { AppError, ErrorCode } from '../errors'

const defaultRemote = 'origin'
const currentBranchMatcher = /^\* (?<branch>.+)$/

type GitFetchPullOptions = {
  remote: string
}

export const gitFetchPull: Command<GitFetchPullOptions> = async (
  args,
  opts
) => {
  const remote = opts.remote ?? defaultRemote

  await execa('git', ['fetch', remote], {
    cwd: opts.cwd,
    stdout: 'inherit',
    stderr: 'inherit'
  })

  const currentBranch = (
    await execa('git', ['branch'], { stderr: 'inherit' })
  ).stdout.match(currentBranchMatcher)?.groups?.branch
  if (!currentBranch) {
    throw new AppError(ErrorCode.unexpected, `Cannot get current branch.`)
  }

  await execa('git', ['pull', remote, currentBranch], {
    cwd: opts.cwd,
    stdout: 'inherit',
    stderr: 'inherit'
  })
}
