import sendgrid from "@sendgrid/mail";

export const setSendgridApiKey = (apiKey: string) => {
  sendgrid.setApiKey(apiKey);
};
