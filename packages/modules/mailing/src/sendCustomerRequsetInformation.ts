/* eslint-disable object-shorthand */
import sendgrid from "@sendgrid/mail";

import { formatUTCDateString } from "./utils";

export interface CustomerRequestInformationParams {
  params: {
    name: string;
    mobile: string;
    email: string;
    currentLocation: string;
    currentLocationPostCode: string;
    destinationLocation: string;
    destinationLocationPostCode: string;
    date: string;
  };
}

export const sendCustomerRequsetInformation = async ({
  params: {
    name,
    mobile,
    email,
    currentLocation,
    currentLocationPostCode,
    destinationLocation,
    destinationLocationPostCode,
    date,
  },
}: CustomerRequestInformationParams) => {
  const dateObj = new Date(date);
  const utcDate = formatUTCDateString(dateObj.toUTCString());

  const results = await sendgrid.send({
    to: email,
    from: "ssoydabas41@gmail.com",
    subject: "Customer Request Information",
    templateId: "d-7044bee5a963450e9024157706c8cd07",
    dynamicTemplateData: {
      name: name,
      mobile: mobile,
      email: email,
      currentLocation: currentLocation,
      currentLocationPostCode: currentLocationPostCode,
      destinationLocation: destinationLocation,
      destinationLocationPostCode: destinationLocationPostCode,
      date: utcDate,
    },
  });

  return results;
};
