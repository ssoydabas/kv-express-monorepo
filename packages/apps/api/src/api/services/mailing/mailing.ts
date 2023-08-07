import * as kvExpressMailing from "@kv-express/mailing";
import { sendgridApiKey } from "~api-root/config";

if (sendgridApiKey) {
  kvExpressMailing.setSendgridApiKey(sendgridApiKey);
}

export default kvExpressMailing;
