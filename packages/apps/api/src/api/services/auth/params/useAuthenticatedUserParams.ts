import type { IUserDocument } from "@kv-express/mongodb";

import type { IRouteParams, ParamsMiddlewareType } from "~api/router/utils";

import { requireAuthenticatedUserMiddleware } from "../middleware";

export interface AuthenticatedUserParams {
  user: IUserDocument;
}

export const useAuthenticatedUserParams = <
  ParamsType extends AuthenticatedUserParams
>({
  middleware,
  getParams,
}: IRouteParams<ParamsType>): IRouteParams<ParamsType> => {
  return {
    middleware: [
      ...middleware,
      requireAuthenticatedUserMiddleware as ParamsMiddlewareType,
    ],
    getParams: (req) => {
      const params = getParams(req);

      params.user = req.user as IUserDocument;

      return params;
    },
  };
};
