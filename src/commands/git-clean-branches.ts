import execa from 'execa'
import { Command } from '.'
import { gitDefaultRemoteBranch } from './git-default-remote-branch'

const cleanBranch = (branch: string) => branch.trim().replace(/^\* /, '')

type GitCleanBranchesOptions = {
  remote: string
  force: boolean
}

export const gitCleanBranches: Command<GitCleanBranchesOptions> = async (
  args,
  opts
) => {
  const defaultBranch = await gitDefaultRemoteBranch([], {
    ...opts,
    silent: true
  })

  const gitBranchResult = await execa('git', ['branch'], { cwd: opts.cwd })
  const branches = gitBranchResult.stdout
    .split('\n')
    .map(cleanBranch)
    .filter((branch) => branch !== defaultBranch)

  await Promise.all(
    branches.map(async (branch) => {
      const gitArgs = ['branch', opts.force ? '-D' : '-d', branch]
      try {
        await execa('git', gitArgs, {
          stdout: 'inherit',
          stderr: 'inherit'
        })
      } catch (error) {
        // Do not propagate errors.
      }
    })
  )
}
