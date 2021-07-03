// eslint-disable-next-line valid-jsdoc
/**
 * @function
 * @author Amin Ashtiani
 * @name readCookie
 * @description get value of your selected cookies
 * @return { object } return your cookie name and its
 */
function readCookie(names) {
  const result = {};
  for (const name of names) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        result[name] = c.substring(nameEQ.length, c.length);
    }
  }
  return result;
}

export default readCookie;
