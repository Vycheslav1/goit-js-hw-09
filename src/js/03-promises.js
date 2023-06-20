
let delayValue;

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

  if (shouldResolve) {
    // Fulfill
     resolve("Success! Value passed to resolve function");
        } else {
          // Reject
         reject("Error! Error passed to reject function");
        }
      }, delay);
    });

    promise.then(value => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(error => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
  }
  

function handleClick(evt){

  console.clear();

  evt.preventDefault();
 
  const elements={delay,step,amount}=evt.currentTarget;
  
  for(let i=0;i<amount.value;i+=1)
  {
  
   delayValue=i>0?delayValue+=Number.parseInt(step.value):Number.parseInt(delay.value); 

  createPromise(i+1, delayValue);

  }
};
const formData=document.querySelector(".form");

formData.addEventListener("submit",handleClick);