import sendgrid from "@sendgrid/mail";

export interface ResetPasswordEmailParams {
  email: string;
  token: string;
}

export const sendResetPasswordEmail = async ({
  email,
  token,
}: ResetPasswordEmailParams) => {
  const results = await sendgrid.send({
    to: email,
    from: "tremorplus@gmail.com",
    subject: "Reset Password",
    templateId: "d-ae1ecb00f9de4156b78bf7a139a612f0",
    dynamicTemplateData: {
      change_password_href: `https://........./auth/reset-password/${token}`,
    },
  });

  return results;
};
