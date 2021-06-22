function getOSDetails() {
  const { userAgent } = navigator;

  const OSList = ["Mac", "Win", "Linux", "like Mac", "Android"];
  for (let i = 0; i < OSList.length; i += 1) {
    return userAgent.indexOf(OSList[i]) && OSList[i];
  }

  return undefined;
}

export default getOSDetails;