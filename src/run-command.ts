import { commands } from './commands'
import { Args, GlobalOpts, Opts } from './commands'
import { AppError, ErrorCode } from './errors'

export const runCommand = async (
  name: string,
  args: Args,
  opts: Opts & GlobalOpts
) => {
  if (opts.debug) {
    console.debug('name:', name)
    console.debug('args:', args)
    console.debug('opts:', opts)
  }

  const command = commands.find((cmd) => [cmd.name, cmd.alias].includes(name))

  if (opts.debug) {
    console.debug('command:', command)
  }

  if (!command) {
    throw new AppError(ErrorCode.commandNotFound, `Command not found: ${name}`)
  }

  await command.run(args, opts)
}
