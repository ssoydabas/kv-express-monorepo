import sendgrid from "@sendgrid/mail";

export interface CustomerRequestInformationParams {
  email: string;
  token: string;
}

export const sendResetPasswordEmail = async ({
  email,
  token,
}: CustomerRequestInformationParams) => {
  const results = await sendgrid.send({
    to: email,
    from: "kv-express@gmail.com",
    subject: "Customer Request Information",
    templateId: "d-ae1ecb00f9de4156b78bf7a139a612f0",
    dynamicTemplateData: {
      currentLocationAddress: ``,
      currentLocationPostCode: ``,
      destinationLocationAddress: ``,
      destinationLocationPostCode: ``,
      movingDate: ``,
      customerName: ``,
      customerPhone: ``,
      customerEmail: ``,
    },
  });

  return results;
};
