let SLYDER_LINE = document.querySelector(".slyder-line");
let BUTTON = document.querySelector("button");
let KEY = 3;
let SPAN = document.querySelector("span");
let SLOT1 = document.querySelector(".SLOT1");
let SLOT2 = document.querySelector(".SLOT2");
let SLOT3 = document.querySelector(".SLOT3");
let DROP = document.querySelector(".drop");
let DROPIMG = document.querySelector(".dropimg");
let OK = document.querySelector(".ok");
let SLOT = 1;
let AUDIO = document.querySelector("audio");
BUTTON.onclick = function () {
  let RANDOM = getRandomInt(18, 35);
if(KEY >= 1){
AUDIO.play();

  SLYDER_LINE.style.left = -150 * RANDOM + "px";
  KEY = KEY - 1;
  SPAN.innerHTML = KEY;


  setTimeout(function () {
    if (RANDOM == 18) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f3a98b4454d.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f3a98b4454d.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f3a98b4454d.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f3a98b4454d.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 19) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f3a98bc2392.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f3a98bc2392.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f3a98bc2392.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f3a98bc2392.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 20) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f3b2ea667de.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f3b2ea667de.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f3b2ea667de.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f3b2ea667de.png");
          }
        }
      }


    }
  }, 3000);

  setTimeout(function () {
    if (RANDOM == 21) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f41a0a2a715.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f41a0a2a715.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f41a0a2a715.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f41a0a2a715.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 22) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4d33293e62.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4d33293e62.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4d33293e62.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4d33293e62.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 23) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb0adc300.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb0adc300.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb0adc300.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb0adc300.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 24) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb0bd4fc6.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb0bd4fc6.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb0bd4fc6.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb0bd4fc6.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 25) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb0d2c386.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb0d2c386.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb0d2c386.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb0d2c386.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 26) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb0e4aa81.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb0e4aa81.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb0e4aa81.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb0e4aa81.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 27) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb0f438fe.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb0f438fe.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb0f438fe.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb0f438fe.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 28) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fb1034d01.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fb1034d01.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fb1034d01.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fb1034d01.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 29) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fd62779b3.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fd62779b3.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fd62779b3.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fd62779b3.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 30) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f4fd6380001.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f4fd6380001.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f4fd6380001.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f4fd6380001.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 31) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f558ca944f4.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f558ca944f4.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f558ca944f4.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f558ca944f4.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 32) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f7a2ba627af.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f7a2ba627af.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f7a2ba627af.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f7a2ba627af.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 33) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f7a2bb51413.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f7a2bb51413.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f7a2bb51413.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f7a2bb51413.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 34) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/middle-61f7a76c1321b.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/middle-61f7a76c1321b.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/middle-61f7a76c1321b.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/middle-61f7a76c1321b.png");
          }
        }
      }


    }
  }, 3000);
  setTimeout(function () {
    if (RANDOM == 35) {
      DROP.style.display = "block";
      SLYDER_LINE.style.left = 0 + "px";
      DROPIMG.setAttribute("src", "img/fal.png");
      if (SLOT == 1) {
        SLOT1.setAttribute("src", "img/fal.png");
        SLOT = SLOT + 1;
      } else {
        if (SLOT == 2) {
          SLOT2.setAttribute("src", "img/fal.png");
          SLOT = SLOT + 1;
        } else {
          if (SLOT == 3) {
            SLOT3.setAttribute("src", "img/fal.png");
          }
        }
      }


    }
  }, 3000);}
  if(KEY < 1){
    BUTTON.style.opacity = 0.3;
  }
}
OK.onclick = function () {
  DROP.style.display = "none";
};





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



