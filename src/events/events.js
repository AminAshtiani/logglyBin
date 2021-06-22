export function getEventDetails(event) {
  if (!event) return null;

  switch (event.type) {
    case "click":
      return getClickEventDetails(event);
    case "keydown":
    case "keyup":
    case "keypress":
      return getKeyboardEventDetails(event);
    case "play":
    case "pause":
      return getMultiMediaEventDetails(event);

    default:
      return {};
  }
}
