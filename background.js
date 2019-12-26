chrome.storage.sync.get(null, function(result) {
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      return { cancel: result.msg_blockReceived };
    },
    {
      urls: [
        "*://*.facebook.com/*delivery_receipts*",
        "*://*.messenger.com/*delivery_receipts*",
        "*://*.facebook.com/*unread_threads*",
        "*://*.messenger.com/*unread_threads*"
      ],
      types: ["xmlhttprequest"]
    },
    ["blocking"]
  );

  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      return { cancel: result.msg_blockTyping };
    },
    {
      urls: ["*://*.facebook.com/*typ.php*", "*://*.messenger.com/*typ.php*"],
      types: ["xmlhttprequest"]
    },
    ["blocking"]
  );

  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      return { cancel: result.msg_blockSeen };
    },
    {
      urls: [
        "*://*.facebook.com/*change_read_status*",
        "*://*.messenger.com/*change_read_status*"
      ],
      types: ["xmlhttprequest"]
    },
    ["blocking"]
  );
});


chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
   console.log(details);
   var postedString = decodeURIComponent(String.fromCharCode.apply(null,new Uint8Array(details.requestBody.raw[0].bytes)));    
   console.log(postedString);
    
    return {requestBody: details.requestBody};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestBody"]);