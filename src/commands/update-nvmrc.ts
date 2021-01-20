import execa from 'execa'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { Command } from '.'
import { AppError, ErrorCode } from '../errors'

const writeFile = promisify(fs.writeFile)

const defaultVersion = '--lts'

export const updateNvmrc: Command = async (args, opts) => {
  const version = args[0] ?? defaultVersion
  const nodeVersion = execa(
    '.',
    ['~/.nvm/nvm.sh', ';', 'nvm', 'use', version, ';', 'node', '--version'],
    {
      cwd: opts.cwd,
      stderr: 'inherit',
      shell: true
    }
  )
  nodeVersion.stdout?.pipe(process.stdout)
  const { stdout } = await nodeVersion
  const newVersion = stdout.split('\n').pop()
  if (!newVersion) {
    throw new AppError(ErrorCode.unexpected, 'Cannot determine Node version.')
  }
  await writeFile(path.join(opts.cwd, '.nvmrc'), newVersion)
}
