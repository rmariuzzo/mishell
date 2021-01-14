import execa from 'execa'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { Command } from './command'

const access = promisify(fs.access)

type RunIfFileExistOptions = {
  file: string | string[]
}

export const runIfFileExist: Command<RunIfFileExistOptions> = async (
  args,
  opts
) => {
  const files = typeof opts.file === 'string' ? [opts.file] : opts.file
  await Promise.all(files.map((file) => access(path.join(opts.cwd, file))))

  const [file, ...more] = args

  const result = execa(file, more, {
    cwd: opts.cwd
  })

  result.stdout?.pipe(process.stdout)
  result.stderr?.pipe(process.stderr)

  await result
}
