const startBtn=document.querySelector("button[data-start]");

const stopBtn=document.querySelector("button[data-stop]");

const bodyColor=document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function colorChange() {
        
    bodyColor.style.background=getRandomHexColor();

  };
  
  let timerId;

  stopBtn.setAttribute("disabled","disabled");
 
  function startChangeBackground(){

    startBtn.setAttribute("disabled","disabled");

    stopBtn.removeAttribute("disabled");
  
    timerId=setInterval(colorChange,1000);
  }

  function stopChangeBackground(){

   
    startBtn.removeAttribute("disabled");

    stopBtn.setAttribute("disabled","disabled");

    clearInterval(timerId);

     }

  startBtn.addEventListener("click",startChangeBackground);

  stopBtn.addEventListener("click",stopChangeBackground);