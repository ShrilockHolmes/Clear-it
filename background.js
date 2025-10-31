let callback = function () {
  console.log('done');
};
function start() {
  // this function remove history of all time the callback function tells us what to do after it is done
  chrome.browsingData.removeHistory({
  }, callback)
}
//start();
chrome.runtime.onStartup.addListener(start);
chrome.runtime.onInstalled.addListener(start);
