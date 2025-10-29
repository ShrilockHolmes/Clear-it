let callback = function () {
  console.log('done');
};

// this function remove history of all time the callback function tells us what to do after it is done
chrome.browsingData.removeHistory({
}, callback);
