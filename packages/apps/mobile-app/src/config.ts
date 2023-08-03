export type KvExpressEnvType = "local" | "staging" | "production";

export const kvExpressEnv: KvExpressEnvType =
  (process.env.KV_EXPRESS_TYPE as KvExpressEnvType | undefined) ?? "local";

export const apiUrl: string =
  process.env.API_URL ?? "http://localhost:3000/api";

export const appUrl: string = process.env.APP_URL ?? "http://localhost:3000";
