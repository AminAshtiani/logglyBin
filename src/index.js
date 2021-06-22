import getOSDetails from "./general/os";
import getBrowserDetails from "./general/browser";
import getScreenDetails from "./general/screen";
import readCookie from "./general/cookies";

export default function createLogCreator() {
  const result = {
    os: getOSDetails(),
    browser: getBrowserDetails(),
    screen: getScreenDetails(),
  };
  return function (specificDetails) {
    return {
      ...result,
    };
  };
}

export { getOSDetails, getBrowserDetails, getScreenDetails, readCookie };
