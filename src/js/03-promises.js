
let delayValue;

const formData=document.querySelector(".form");

const inputDelay=document.querySelector('input[name="delay"]');

const inputStep=document.querySelector('input[name="step"]');

const inputAmount=document.querySelector('input[name="amount"]');

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
 
   for(let i=0;i<inputAmount.value;i+=1)
  {
  
   delayValue=i>0?delayValue+=Number.parseInt(inputStep.value):Number.parseInt(inputDelay.value); 

  createPromise(i+1, delayValue);

  }
};


formData.addEventListener("submit",handleClick);