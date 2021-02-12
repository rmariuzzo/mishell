import execa from 'execa'
import { Command } from '.'
import { AppError, ErrorCode } from '../errors'

const validNewVersions = ['major', 'minor', 'patch', 'release']
const validReleaseIds = ['alpha', 'beta', 'next']

type NpmPreVersionOptions = {}

export const npmPreVersion: Command<NpmPreVersionOptions> = async (
  args,
  opts
) => {
  const [newVersion, releaseId] = args

  if (!validNewVersions.includes(newVersion)) {
    throw new AppError(ErrorCode.invalidInput, `Invalid new version: ${newVersion}. Use: ${validNewVersions.join(', ')}.`)
  }

  if (releaseId && !validReleaseIds.includes(releaseId)) {
    throw new AppError(ErrorCode.invalidInput, `Invalid release id: ${releaseId}. Use: ${validReleaseIds.join(', ')}.`)
  }

  const npmArgs = ['version', `pre${newVersion}`]
  if (releaseId) {
    npmArgs.push(`--preid=${releaseId}`)
  }
  
  const result = execa('npm', npmArgs)

  result.stdout?.pipe(process.stdout)
  result.stderr?.pipe(process.stderr)

  await result
}
