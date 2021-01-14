export enum ErrorCode {
  unhandled = 99,
  commandNotFound = 94,
  invalidInput = 3,
  notFound = 4,
}

export class AppError extends Error {
  code
  constructor(code: ErrorCode, message: string) {
    super(message)
    Object.setPrototypeOf(this, AppError.prototype)
    this.code = code
  }
}
