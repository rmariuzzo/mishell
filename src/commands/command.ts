export type GlobalOpts = {
  debug: boolean
  cwd: string
}

export type Args = ReadonlyArray<string>

export type Opts = Record<string, any>

export type Command<
  O extends Opts = any,
  R = any
> = {
  (args: Args, opts: O & GlobalOpts): Promise<R>
}
