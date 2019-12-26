chrome.storage.sync.get(null, function(result) {
  
    console.log('data', result)
    
    if (result.msg_blur) {

        var style = document.createElement('style');

        style.innerHTML = `
            .messagesContent, ._6zk9, ._58nk, ._5yl5 {
                -webkit-filter: blur(3px);
                filter: blur(3px);
            }
            .messagesContent:hover, ._6zk9:hover, ._58nk:hover, ._5yl5:hover {
                -webkit-filter: blur(0px);
                filter: blur(0px);
            }
            ._23_m {
                filter: blur(0px) !important;
            }
        `
        document.head.appendChild(style)


    }
   // if ()
});




function linkRemove(text) {
    var initialText  = text
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    text.replace(urlRegex)
    return text.replace(urlRegex, function(url) {
         url = url.replace('.', ' .')
         url = url.replace('https://', 'https ://')
         url = url.replace('http://', 'http ://')
         return url
    });
}