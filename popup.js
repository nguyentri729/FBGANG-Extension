
//set Default value
chrome.storage.sync.get(['msg_blur'], function(result) {
  console.log(result);
  
  $('#msg_blur').prop( "checked", result.msg_blur) 

    
});

//onChange button checkbox

$('input[type="checkbox"]').change((e) => {
    const {name, checked} = e.target


    chrome.storage.sync.set({[name]: checked})




})

