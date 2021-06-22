function getBrowserDetails() {
  const ua = navigator.userAgent;
  let browsersList =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];
  let temp = "";
  if (/trident/i.test(browsersList[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return `IE ${temp[1] || ""}`;
  }
  if (browsersList[1] === "Chrome") {
    temp = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (temp != null) return temp.slice(1).join(" ").replace("OPR", "Opera");
  }
  browsersList = browsersList[2]
    ? [browsersList[1], browsersList[2]]
    : [navigator.appName, navigator.appVersion, "-?"];
  temp = ua.match(/version\/(\d+)/i);
  if (temp != null) browsersList.splice(1, 1, temp[1]);
  const [browser, version] = browsersList;
  return { browser, version };
}
export default getBrowserDetails;