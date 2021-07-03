import getOSDetails from "./general/os";
import getBrowserDetails from "./general/browser";
import getScreenDetails from "./general/screen";
import readCookie from "./general/cookies";
import getEventDetails from "./events";
import getUrlDetails from "./general/urls";

// eslint-disable-next-line valid-jsdoc
/**
 * @function
 * @author Amin Ashtiani
 * @name createLogger
 * @description create a logger function
 * @return { Function } function which is create logger method
 */
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
  const user = readCookie(process.env.REACT_APP_COOKIES.split(","));
  // eslint-disable-next-line valid-jsdoc
  /**
   * @function
   * @author Amin Ashtiani
   * @name Logger
   * @description create a logger function
   * @param { object } specificDetails - all details which is needed for a log
   * @return { object } final log
   */
  return function (specificDetails) {
    const { event, asset = {}, ...restItems } = specificDetails;
    const action = getEventDetails(event);
    const url = getUrlDetails();
    const log = {
      timestamp: new Date().getTime(),
      ext: {
        ...restItems,
      },
    };
    return {
      source: {
        ...source,
        app: {
          name: process.env.REACT_APP_SOURCE || process.env.SOURCE,
          url: window.location.href,
          page: window.location.pathname.substr(1).toUpperCase(),
          ext: {
            ...url,
          },
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
