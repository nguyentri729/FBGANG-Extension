chrome.storage.sync.get(null, function(result) {
  
    console.log('data', result)
    
    if (result.msg_blur) {

        var style = document.createElement('style');

        style.innerHTML = `
            .messagesContent, ._6zk9 {
                -webkit-filter: blur(7px);
                filter: blur(7px);
            }
            .messagesContent:hover, ._6zk9:hover {
                -webkit-filter: blur(0px);
                filter: blur(0px);
            }
            ._23_m {
                filter: blur(0px) !important;
            }
        `
        document.head.appendChild(style)


    }
});