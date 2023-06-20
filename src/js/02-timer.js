import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const startBtn=document.querySelector("button[data-start]");

const spanDays=document.querySelector("span[data-days]");

const spanHours=document.querySelector("span[data-hours]");

const spanMinutes=document.querySelector("span[data-minutes]");

const spanSeconds=document.querySelector("span[data-seconds]");

startBtn.setAttribute("disabled","disabled");

let timePeriod;

let timer;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0].getTime()>options.defaultDate.getTime())
        {
            startBtn.removeAttribute("disabled"); 
            
       timePeriod=selectedDates[0].getTime()-options.defaultDate.getTime();
     
        }else{
            alert("Please choose a date in the future");
        }

      },
  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  flatpickr("#datetime-picker", options);

  startBtn.addEventListener("click",handlClick);

 

  function addLeadingZero(value)
  {
   
    if(convertMs(value).days.toString().length<2)
    {
      spanDays.textContent="0"+convertMs(timePeriod).days;
     
    }else{
        spanDays.textContent=convertMs(value).days; 
    }
    if(convertMs(value).hours.toString().length<2)
    {
     
     spanHours.textContent="0"+convertMs(value).hours;

    }else{
        spanHours.textContent=convertMs(value).hours;
    }
    if(convertMs(value).minutes.toString().length<2)
    {
     
      spanMinutes.textContent="0"+convertMs(value).minutes;

    }else{
        spanMinutes.textContent=convertMs(value).minutes; 
    }
    if(convertMs(value).seconds.toString().length<2)
    {
      
      spanSeconds.textContent="0"+convertMs(value).seconds;

    }else{

        spanSeconds.textContent=convertMs(value).seconds;
    }
 

  }

  function timeChange(){
   
    if(timePeriod>=1000)
    {
      addLeadingZero(timePeriod);

    timePeriod-=1000;
 
    }else{

  spanDays.textContent="00";
 
 spanHours.textContent="00";

 spanMinutes.textContent="00";

 spanSeconds.textContent="00";
 
 clearInterval(timer);

 startBtn.removeAttribute("disabled");
    }

  }

  function handlClick()
  {
   startBtn.setAttribute("disabled","disabled");

     timer=setInterval(timeChange,1000);

  }

 