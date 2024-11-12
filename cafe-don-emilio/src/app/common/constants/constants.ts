import { UnmutableConstants } from "./unmutable-constans";

export class Constants extends UnmutableConstants {
  static readonly appHost =
    "https://backend-web-app-cafe-don-emilio.onrender.com/";
  //static readonly appHost = "https://app-cafe-don-emilio.com/";
  static readonly apiBaseUrl = "CafeDonEmilioWS/api";

  static readonly modoOffline = false;
}
