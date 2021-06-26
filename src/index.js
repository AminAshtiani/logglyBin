import getOSDetails from "./general/os";
import getBrowserDetails from "./general/browser";
import getScreenDetails from "./general/screen";
import readCookie from "./general/cookies";

function createLogger() {
  const result = {
    agent: {
      os: getOSDetails(),
      userAgent: navigator.userAgent,
      ext: {
        browser: getBrowserDetails(),
      },
    },
    app: {
      name: process.env.REACT_APP_SOURCE || process.env.SOURCE,
      url: window.location.hostname,
    },
    screen: getScreenDetails(),
  };
  return function (specificDetails) {
    return {
      source: {
        ...result,
      },
    };
  };
}

const Logger = createLogger();
export default Logger;

export { getOSDetails, getBrowserDetails, getScreenDetails, readCookie };
