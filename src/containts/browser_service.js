import Bowser from "bowser";

export const platformType = Bowser.getParser(
  window.navigator.userAgent
).getPlatformType();
