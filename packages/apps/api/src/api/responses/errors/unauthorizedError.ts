import { type Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import type IUnauthorizedErrorResponse from "./INotFoundErrorResponse";

export default function unauthorizedError(res: Response, error?: Error) {
  const status = StatusCodes.UNAUTHORIZED;

  const body: IUnauthorizedErrorResponse = {
    message: error?.message ? error.message : ReasonPhrases.UNAUTHORIZED,
  };

  return res.status(status).send(body);
}
