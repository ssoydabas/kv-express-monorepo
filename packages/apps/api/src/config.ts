export const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export const mongodbUri =
  process.env.MONGODB_URI ?? "mongodb://localhost:27017";

export const isDevelopment = process.env.NODE_ENV === "development";

export const jwtExpiresIn = process.env.JWT_EXPIRES_IN ?? "2w";

export const jwtSecret = process.env.JWT_SECRET ?? "secret";

export const sendgridApiKey = process.env.SENDGRID_API_KEY;

export const googleCalendarCredentials = {
  type: process.env.GOOGLE_CALENDAR_CREDENTIALS_TYPE,
  project_id: process.env.GOOGLE_CALENDAR_CREDENTIALS_PROJECT_ID,
  private_key_id: process.env.GOOGLE_CALENDAR_CREDENTIALS_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_CALENDAR_CREDENTIALS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  ),
  client_email: process.env.GOOGLE_CALENDAR_CREDENTIALS_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CALENDAR_CREDENTIALS_CLIENT_ID,
  auth_uri: process.env.GOOGLE_CALENDAR_CREDENTIALS_AUTH_URI,
  token_uri: process.env.GOOGLE_CALENDAR_CREDENTIALS_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.GOOGLE_CALENDAR_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url:
    process.env.GOOGLE_CALENDAR_CREDENTIALS_CLIENT_X509_CERT_URL,
  universe_domain: process.env.GOOGLE_CALENDAR_CREDENTIALS_UNIVERSE_DOMAIN,
};
