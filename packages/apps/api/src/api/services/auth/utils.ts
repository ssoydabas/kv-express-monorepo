import { v4 as uuid } from "uuid";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import { jwtSecret, jwtExpiresIn } from "~api-root/config";

export const hashPassword = async (password: string) => {
  return await hash(password, 12);
};

export const createAccessToken = (id: string) =>
  sign({ id }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  });

export const createUniqueToken = () => uuid();

export const createVerificationToken = () => createUniqueToken();

export const createResetPasswordToken = () => createUniqueToken();
