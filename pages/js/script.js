//fetching form things
const weather=document.querySelector('form');
const address=document.querySelector('input');
const weathermessage1=document.querySelector('#msg1')
const weathermessage2=document.querySelector('#msg2')
// weathermessage.textContent=''


weather.addEventListener('submit',(e) => {
    e.preventDefault();
    const address1=address.value
    weathermessage1.textContent='Please wait....'
    weathermessage2.textContent=''

    //fetch address and passing in arguments
fetch('/weather?address='+address1).then((response) =>{
    response.json().then( (data)=>{
        if(data.error){
            weathermessage1.textContent=data.error
        }

        else{
            // console.log(data.location);
            // console.log(data.answer);
            weathermessage1.textContent='Location: '+data.location
            weathermessage2.textContent='Weather: '+data.answer;
        }


    })
})



    console.log(address.value);
})



