import React from 'react'; 

let currentTime = new Date();
currentTime = currentTime.getHours();

let greetings = '';
let dynamicCSS = {};

if (currentTime >= 1 && currentTime < 12) {
    greetings = 'Good Morning!!';
    dynamicCSS.color = 'Green';
} else if (currentTime >= 12 && currentTime < 19) {
    greetings = 'Good AfterNoon!!';
    dynamicCSS.color = "orange";
} else {
    greetings = 'GoodNight!!';
    dynamicCSS.color = '#000';
}

function WelcomeScreen(){
    return(
        <>
            <div>
                <h1 className='welcomeScreen'> Hello Sir,<span style={dynamicCSS}>{greetings}</span>!!</h1>
            </div>
        </>
    );
}



export default WelcomeScreen;