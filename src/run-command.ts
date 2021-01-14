import { commands } from './commands'
import { Args, GlobalOpts, Opts } from './commands'

export const runCommand = async (
  name: string,
  args: Args,
  opts: Opts & GlobalOpts
) => {
  const command = commands.find(({ name, alias }) =>
    [name, alias].includes(name)
  )
  if (!command) {
    throw new Error(`Command not found: ${name}`)
  }

  await command.run(args, opts)
}
