const ERROR_MESSAGE =
  "You don't have required permissions to access this resource";

export class NotAuthenticatedError extends Error {
  constructor(message) {
    super(ERROR_MESSAGE);

    this.customMessage = message;
    this.statusCode = 403;
  }
}
