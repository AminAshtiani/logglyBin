function getClickEventDetails(event) {
  const {
    type,
    isTrusted,
    clientX,
    clientY,
    button,
    target: { name },
  } = event;

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
function getMultiMediaEventDetails(event) {
  const {
    type,
    isTrusted,
    target: { name },
  } = event;

  return {
    type: 'MULTIMEDIA',
    action: type.toUpperCase(),
    extraData: {
      isTrusted,
      targetName: name,
    },
  };
}

function getKeyboardEventDetails(event) {
    const {
      which,
      key,
      target: { name, value: currentInputValue },
    } = event;
    let { type } = event;
    if (key === 'Enter') {
      type = 'Submit';
    } else if (key === 'Backspace') {
      type = 'Clear';
    }
    return {
      type: 'TYPE',
      action: type.toUpperCase(),
      data: {
        key,
        which,
        targetName: name,
        currentInputValue,
      },
    };
  }

export default function getEventDetails(event) {
  if (!event) return null;
  if(event.type === 'click') {
    return getClickEventDetails(event);
  }
  if(event.type === 'keydown' || event.type === 'keyup' || event.type === 'keypress' || event.type === 'change') {
    return getKeyboardEventDetails(event);
  }
  if(event.type === "play" || event.type === "pause") {
    return getMultiMediaEventDetails(event);
  }
  return {};
}
