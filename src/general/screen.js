// eslint-disable-next-line valid-jsdoc
/**
 * @function
 * @author Amin Ashtiani
 * @name getScreenDetails
 * @description provide your actual screen size and your app size
 * @return {{ device: Object, app: Object }} return your screen information
 */
function getScreenDetails() {
  if (!screen || !window)
    throw new Error("This method is not proper for your environment");
  return {
    /* eslint-disable no-restricted-globals */
    device: {
      width: screen.width,
      height: screen.height,
    },
    app: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
}

export default getScreenDetails;
