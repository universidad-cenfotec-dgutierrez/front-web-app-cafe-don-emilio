import { UnmutableConstants } from "./unmutable-constans";

export class Constants extends UnmutableConstants {
  static readonly appHost = "http://localhost:4200/";
  //static readonly appHost = "https://app-cafe-don-emilio.com/";
  static readonly apiBaseUrl = "CafeDonEmilioWS/api";

  static readonly modoOffline = true;
}
