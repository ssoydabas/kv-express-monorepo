import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { UserModel, type IUserDocument } from "@kv-express/mongodb";

import { jwtSecret } from "~api-root/config";
import { unauthorizedError } from "~api/responses/errors";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const authenticate = async (tokenPayload: unknown): Promise<IUserDocument> => {
  if (
    tokenPayload === undefined ||
    tokenPayload === null ||
    typeof tokenPayload !== "object" ||
    !("id" in tokenPayload)
  ) {
    throw new Error("Token payload is empty");
  }

  const user = await UserModel.findById(tokenPayload.id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

passport.use(
  "jwt",
  new JwtStrategy(jwtOptions, (payload: unknown, done) => {
    authenticate(payload)
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error, false);
      });
  })
);

const requireAuthenticatedUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  passport.authenticate(
    "jwt",
    { session: false },
    (error?: Error, user?: IUserDocument) => {
      if (error) {
        return unauthorizedError(res, error);
      }

      if (!user) {
        return unauthorizedError(res);
      }

      req.user = user;

      next();
    }
  )(req, res, next);
};

export default requireAuthenticatedUserMiddleware;
