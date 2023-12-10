const { BrowserWindow } = require('@electron/remote');
const $ = require('../../node_modules/jquery');
const fs = require('fs');

var lastClicked = 'panel';

function changePage(id) {
  document.getElementById(lastClicked).className = 'btn btn-minebox';
  document.getElementById(id).className = 'btn btn-minebox active';
  lastClicked = id;
  document.getElementById('mainContent').src = `../HTML/SUBPAGES/${id}.html`;
}

async function onLoad() {

  var window = BrowserWindow.getFocusedWindow();
  setTimeout(() => {
    window.maximize();
  }, 250);
  document.getElementById('min').addEventListener('click', minWindow);
  document.getElementById('max').addEventListener('click', maxWindow);
  document.getElementById('exit').addEventListener('click', exitWindow);

  changePage('panel');
}

function minWindow () {
  var window = BrowserWindow.getFocusedWindow();
  window.minimize();
}

var timer = 0;

function maxWindow () {
  var window = BrowserWindow.getFocusedWindow();
  if(window.isMaximized() == true){
    if(timer == 0){
      window.unmaximize();
      timer = 1;
    }
  }else{
    if(timer == 0){
      window.maximize();
      timer = 1;
    }
  }
  setTimeout(() => {
    timer = 0;
  }, 1000);
}

function exitWindow () {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}

function searchF() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('gameList');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.id;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//PARTICLES
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });