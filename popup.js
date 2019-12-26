
//set Default value
chrome.storage.sync.get(null, function(result) {
 console.log(result);
 for(var name in result){
     $('#'+name+'').prop( "checked", result[name]) 
  

 }

  //$('#msg_blur').prop( "checked", result.msg_blur) 

    
});

//onChange button checkbox

$('input[type="checkbox"]').change((e) => {
    const {name, checked} = e.target


    chrome.storage.sync.set({[name]: checked})




})

