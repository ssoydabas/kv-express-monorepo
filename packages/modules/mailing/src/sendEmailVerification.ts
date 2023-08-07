import sendgrid from "@sendgrid/mail";

export interface EmailValidationParams {
  email: string;
  verificationToken: string;
}

export const sendEmailVerification = async ({
  email,
  verificationToken,
}: EmailValidationParams) => {
  const results = await sendgrid.send({
    to: email,
    from: "tremorplus@gmail.com",
    subject: "Email Verification",
    templateId: "d-d2dced0d1ac04247a93ee53b68edf35e",
    dynamicTemplateData: {
      verify_href: `https://......../auth/verify/${verificationToken}`,
    },
  });

  return results;
};
