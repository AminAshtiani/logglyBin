function getScreenDetails() {
    if(!screen || !window) throw new Error("This method is not proper for your environment")
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