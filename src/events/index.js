/**
 * @typedef {object} MouseEvent
 * @typedef {object} HTMLElement
 * @typedef {object} MultimediaEvent
 * @typedef {object} KeyboardEvent
 * @typedef {object} UnknownEvent
 */
// eslint-disable-next-line valid-jsdoc
/**
 * @function
 * @author Amin Ashtiani
 * @name getClickEventDetails
 * @description get essential inforamation from click event
 * @param { MouseEvent } event
 * @return {{ type: String, action: String, data: Object }} return type, action and extra data from MouseEvent
 */
function getClickEventDetails(event) {
  const { type, isTrusted, clientX, clientY, button, target } = event;
  let {
    target: { name },
  } = event;
  if (!name) {
    name = target.closest("[data-action]").getAttribute("data-action");
  }
  return {
    type: type.toUpperCase(),
    action: name.toUpperCase(),
    data: {
      isTrusted,
      clientX,
      clientY,
      button,
    },
  };
}
/**
 * @function
 * @author Amin Ashtiani
 * @name getMultiMediaEventDetails
 * @description get essential inforamation from multimedia event
 * @param { MultimediaEvent } event
 * @return {{ type: String, action: String, data: Object }} return type, action and extra data from MultimediaEvent
 */
function getMultiMediaEventDetails(event) {
  const {
    type,
    isTrusted,
    target: { name },
  } = event;

  return {
    type: "MULTIMEDIA",
    action: type.toUpperCase(),
    extraData: {
      isTrusted,
      targetName: name,
    },
  };
}
/**
 * @function
 * @author Amin Ashtiani
 * @name getKeyboardEventDetails
 * @description get essential inforamation from keyboard event
 * @param { KeyboardEvent } event
 * @return {{ type: String, action: String, data: Object }} return type, action and extra data from KeyboardEvent
 */
function getKeyboardEventDetails(event) {
  const {
    which,
    key,
    target: { name, value: currentInputValue },
  } = event;
  let { type } = event;
  if (key === "Enter") {
    type = "Submit";
  } else if (key === "Backspace") {
    type = "Clear";
  }
  return {
    type: "TYPE",
    action: type.toUpperCase(),
    data: {
      key,
      which,
      targetName: name,
      currentInputValue,
    },
  };
}

/**
 * @function
 * @author Amin Ashtiani
 * @name getEventDetails
 * @description detect your event type and call its related function to get event information
 * @param { UnknownEvent } event
 * @return { Object } return Event detail object
 */
export default function getEventDetails(event) {
  if (!event) return null;
  if (event.type === "click") {
    return getClickEventDetails(event);
  }
  if (
    event.type === "keydown" ||
    event.type === "keyup" ||
    event.type === "keypress" ||
    event.type === "change"
  ) {
    return getKeyboardEventDetails(event);
  }
  if (event.type === "play" || event.type === "pause") {
    return getMultiMediaEventDetails(event);
  }
  return {};
}
