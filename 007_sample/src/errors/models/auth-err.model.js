const ERROR_MESSAGE = "incorrect login or password";

export class AuthError extends Error {
  constructor(message) {
    super(ERROR_MESSAGE);

    this.customMessage = message;
    this.statusCode = 400;
  }
}
