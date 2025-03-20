export class HttpError extends Error {
  private statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class ConflictError extends HttpError {
  constructor() {
    super(409, "User exists.");
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(400, "Invalid request body or missing some params.");
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super(404, "Not found.");
  }
}

export class UnauthorizedError extends HttpError {
  constructor() {
    super(401, "Unauthorized");
  }
}

export class ForbiddenError extends HttpError {
  constructor() {
    super(403, "Forbidden");
  }
}
