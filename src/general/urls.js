import queryString from "query-string";

// eslint-disable-next-line valid-jsdoc
/**
 * @function
 * @author Amin Ashtiani
 * @name getUrlDetails
 * @description provide your current url and its params
 * @return {{ query: Object }} return your screen information
 */
function getUrlDetails() {
  const { query } = queryString.parseUrl(window.location.href);
  return { query };
}

export default getUrlDetails;
