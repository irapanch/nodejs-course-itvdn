export class NotUniqueLoginError extends Error {
  constructor(message) {
    super(message);

    this.customMessage = message;
    this.statusCode = 401;
  }
}
