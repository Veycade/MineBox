const {ipcRenderer} = require('electron');
let $ = require('jquery');


function onLoad(){
  var i=0;
  setInterval(() => {
    i++;
    $('.progress-bar').css('width', i+'%').attr('aria-valuenow', i);
    if(i >= 300){
        window.location.href = '../HTML/index.html';
    }
      }, 20);
}


