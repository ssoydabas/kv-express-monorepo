import { type Request, type Response, type NextFunction } from "express";
import { checkSchema, validationResult, type Schema } from "express-validator";

import { badRequestError } from "~api/responses/errors";

import { type ParamsMiddlewareType } from "~api/router/utils";

export default function createMiddleware(schema: Schema): ParamsMiddlewareType {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validations = checkSchema(schema);

    await Promise.all(
      validations.map(async (validation) => await validation.run(req))
    );

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      next();
      return;
    }

    badRequestError(res, errors.array());
  };
}
