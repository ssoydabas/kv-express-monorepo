import { type RouteFlowType } from "../../utils";
import { type ICreateOneEventParams } from "./params";
import {
  type CreateOneEventResults,
  successResponse,
  eventAlreadyExistsResponse,
  emailAlreadyExistsResponse,
} from "./response";

import { EventModel } from "@kv-express/mongodb";
import { kvExpressMailing } from "~api/services/mailing";
import { createOneEvent } from "~api/services/google-calendar";

import { convertToUTC } from "~api/utils";

//   PARAMS
//   {
//   name,
//   mobile,
//   email,
//   currentLocation,
//   currentLocationPostCode,
//   destinationLocation,
//   destinationLocationPostCode,
//   date,
// }

export const flow: RouteFlowType<
  ICreateOneEventParams,
  CreateOneEventResults
> = async (params) => {
  const { date, email } = params;
  console.log(email);

  const doesEventExist = await EventModel.exists({ date });
  if (doesEventExist) return eventAlreadyExistsResponse(date);

  const doesEmailExist = await EventModel.exists({ email });
  if (doesEmailExist) {
    return emailAlreadyExistsResponse(email);
  }

  await createOneEvent(params);

  await EventModel.create({ ...params, date: convertToUTC(date) });

  await kvExpressMailing.sendCustomerRequsetInformation({ params });

  return successResponse();
};
