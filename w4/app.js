console.log("Welcome to Instant Greeting Generator!");

const buttonElement = document.getElementById('submit');
const h2Element     = document.getElementById('secret-message');


const buttonListen = function (event){
    event.preventDefault();
    if (element gets clicked){
        h2Element.textContent(`Hello ${name}, have clicked the button!`)
    }
    
};


const getButton = function (){
    document.addEventListener('click', buttonListen);
};