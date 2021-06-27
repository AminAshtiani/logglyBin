import getOSDetails from "./general/os";
import getBrowserDetails from "./general/browser";
import getScreenDetails from "./general/screen";
import readCookie from "./general/cookies";
import getEventDetails from './events';
import getUrlDetails from "./general/urls";

function createLogger() {
  const source = {
    agent: {
      os: getOSDetails(),
      userAgent: navigator.userAgent,
      ext: {
        browser: getBrowserDetails(),
      },
    },
    screen: getScreenDetails(),
  };
  const user = readCookie(['uuid', 'X-Trace-Id', 'phone_hash']);
  return function (specificDetails) {
    const { event, asset = {}, ...restItems } = specificDetails;
    const action = getEventDetails(event);
    const url = getUrlDetails();
    const log = {
      timestamp: new Date().getTime(),
      ext: {
        ...restItems
      }
    }
    return {
      source: {
        ...source,
        app: {
          name: process.env.REACT_APP_SOURCE || process.env.SOURCE,
          ...url,
        },
      },
      user,
      action,
      asset,
      log,
    };
  };
}

const Logger = createLogger();
export default Logger;

export { getOSDetails, getBrowserDetails, getScreenDetails, readCookie };
