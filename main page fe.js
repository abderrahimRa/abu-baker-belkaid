function change() {
  let circle = document.getElementById("circle");
  if (circle.style.transform === "translateX(36px)") {
    circle.style.transform = "translateX(0px)";
    document.getElementById("circle").src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAd1JREFUWEftl+FRwzAMhd/bACZgBZgARigTQDeACaATwAa0E8AGlA3YgDIBbCBOOTtnTGwpaVN6vequP9I4yucnyVKIHTPuGA/2D0hE7gHcBaVnJPV6sK2t0AFIRK5Jzksx6KOQ5UvfUQ2ZiCjIFYA5yWkXlIhcANCf2pLksrDO9FUF0t0AeEqcF6GsDE42FpdOS6p7FTIdVUKab2xBUv/rNLPKkt39cSQiRwDOAZwG7+8A3kh+p2+r+cipTCB9IE/GAPIAoLRTzZfbFMyT0GZSF5JT1XgFoOrUbAXgkqSq5jaXQtFbUObDARMfUaizPIQ1ur5AsXTdOwZQTeJBORTySEP01YckWXvsVemXQuHUlcSRVkxz0InIBMDzQCDNpZfgRw9RrczWSM7iRQ6UwuiatntnLaIvV9UPyZZj54HyWabtTRsOWex9jdLpDOWuslDy201qKzE6mqT1iN4fp+yT0teT98RDAuBT+5y35JvwOR23y0REW4eWsAWlMJNRWkehuT6G4a1rTwsAN6M019rUGBJdKyYdP7QyS+OHOeT9x4BWhSoCdYywvaoljeMYI2wRJgz5sTe1vS9PLO/UaFaZNelt9TPIcyT0AfL4MxWynByALIU2fX/tkO090A9BYx80CTXGugAAAABJRU5ErkJggg==";
    document.getElementById("main").style.background =
      "linear-gradient(145deg, #e2e1e1, #f9f7f7)";
    document.getElementById("login").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "#0047ab";
    document.getElementById("login").style.color = "black";
    document.getElementById("password").style.color = "black";
    document.getElementById("email").style.color = "black";
    document.getElementById("info").style.color = "black";
    const form = document
      .querySelectorAll(".form-control")
      .forEach((el) => (el.style.backgroundColor = "white"));
    let me = document.querySelectorAll("#first,#second,#third,#forth");
    for (let i = 0; i < me.length; i++) {
      me[i].style.color = "black";
      if (screen.width <= 768) {
        document.getElementById("phonelist").style.backgroundColor = "white";
      }
    }
    document.getElementById("btn").style.backgroundColor = "#0047ab";

    /* this is for page responsivity*/
  } else {
    circle.style.transform = "translateX(36px)";

    document.getElementById("circle").src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnpJREFUWEftV9FRGzEU3K2AdABUkFAB0AFUkFBBoIJABUAHUAFQQaACSAekA1LBMpuRPLpn3Vnnwx6Y4c34w+eztNq3b98T8c6C7wwPPj4gSVsAvgP4kdjdJ/n8Vkw3MyTpG4BfAA7C5mckT9cKSJLZOAfwpbLxIcnbtQGSdAHg58CGTtn9WgBJukp6yfs9ADgG8JgfkGxOewvo3sUkeWOnKcc1yf9ClqS1AkoCnrEAYAYmAXJVbSZQ2yuvMknWxG7a8A9JV9gswu+r1ZCkPQC/i/3nGJDkMrcFOFZb9kHInVRlkJLsRTfp+zPJ7RbBtrwzJ2pJLwA20p93SD7FhSTZj6yj/N4RSVfk5OgACmL+S9JtohohbQZn8D7MpIiASv08kPT3PkCRpXuS+5PQAN1uP1asQUvGckXyaAqoyNDo6gmHMBZbhvvbUumbDMgIKi3GYI5JXo9lKwIqy/mOZBw1etevMOV3LXYz5mnghaR7oQ/gYvkKwIZra5nNU0NVNtpfkqZc/tkOWgjq7LOUDw3tkjzKjdmfFmAde6kBKkeOqlO3HDulxim3dTg1tgmnKUan9dQALexlrYBq71UmiU6vrM5DoZu/ieFlcGHtuQz0AYosXZK0JiZFsId/TmfslUMTY2mSBnJB8mRZRBWvql4OBufhyiL2k5MxE2LyHI8q5ZDXy/giQK4M3zp8McxhF/azjqFF5pJ4/b+Y6sHKbbox9LhwdmLPS+XMZCb8qY0uZteH6Y0mQMlTLHTrKs/aY+TklnHacn9rBlSUra9C2fCGnNhVZM15JGm+SI4GVNKSLgTWWSlYp8+NtBlEueYkQGNy1vruJ6BFTL0CeqgVNEJIAWcAAAAASUVORK5CYII=";
    document.getElementById("main").style.background = "#1e2e3d";
    document.getElementById("login").style.backgroundColor = "#273444";
    document.getElementById("body").style.backgroundColor = "#1e2e3d";
    document.getElementById("login").style.color = "white";
    document.getElementById("login").style.border = "none";
    document.getElementById("info").style.color = "white";
    const form = document
      .querySelectorAll(".form-control")
      .forEach((el) => (el.style.backgroundColor = "#1e2835"));
    let me = document.querySelectorAll("#first,#second,#third,#forth");
    for (let i = 0; i < me.length; i++) {
      me[i].style.color = "white";
    }
    if (screen.width <= 768) {
      document.getElementById("phonelist").style.backgroundColor = "#5150ff";
    }
    document.getElementById("btn").style.backgroundColor = "#5150ff";
    document.getElementById("password").style.color = "white";
    document.getElementById("email").style.color = "white";
    /* this is for page responsivity*/
  }
}

function logindisplay() {
  let log = document.getElementById("login");
  if (log.style.display == "none") {
    log.style.display = "block";
  } else {
    log.style.display = "none";
  }
}
function info() {
  document.getElementById("login").style.display = "none";
  document.getElementById("info").style.display = "block";
  document.getElementById("image").style.display = "block";
}
function info2() {
  document.getElementById("info").style.display = "none";
  document.getElementById("image").style.display = "none";
}
window.onresize = function () {
  if(screen.width>=768){
    document.getElementById("phonelist").style.backgroundColor = "transparent";

  }else{
    
  }
  
}
