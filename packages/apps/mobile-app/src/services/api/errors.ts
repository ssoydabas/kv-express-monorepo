export class ApiError extends Error {
  name = "ApiError";

  constructor(message: string, public statusCode: number) {
    super(message);
  }
}

export interface IBadRequestError {
  msg: string;
  location: string;
  param: string;
}

export class BadRequestError extends ApiError {
  name = "BadRequestError";

  constructor(message: string, public errors: IBadRequestError[]) {
    super(message, 400);
  }
}
