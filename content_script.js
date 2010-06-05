window.addEventListener("mouseup", function(event) {
  if(event.ctrlKey) {
    window.setTimeout(function() {
      if(window.getSelection().toString()) {
        chrome.extension.sendRequest(window.getSelection().toString()); 
      }
    }, 500);
  }
});

