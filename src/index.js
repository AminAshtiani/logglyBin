import getOSDetails from "./general/os";
import getBrowserDetails from "./general/browser";
import getScreenDetails from "./general/screen";
import readCookie from "./general/cookies";
import getEventDetails from './events';

function createLogger() {
  const source = {
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
  const user = readCookie(['uuid', 'X-Trace-Id', 'phone_hash']);
  return function (specificDetails) {
    const { event, ...restItems } = specificDetails;
    const action = getEventDetails(event);
    const log = {
      timestamp: new Date().getTime(),
    }
    return {
      source: {
        ...source,
      },
      user,
      action,
      log,
    };
  };
}

const Logger = createLogger();
export default Logger;

export { getOSDetails, getBrowserDetails, getScreenDetails, readCookie };
