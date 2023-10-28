import React from 'react';
import { useState } from 'react';

function Events() {

    // On button click and double click change background and it content and make it reverse(on double click)
    const bgColor = "pink";
    const colorPurple ="purple";
    const reverseBgColor = "#fff";
    const buttonName ="Click Me Here";

    // For BgColor Change
    const [bgC, bgSet] = useState(bgColor);

    // For Button Name Change
    const [nameC, nameU] = useState(buttonName);

    const bgChange = () =>{
            bgSet(colorPurple);
            nameU("You have changed me successfully!!")
    }

    const bgReverse = () =>{
            bgSet(reverseBgColor);
            nameU(buttonName);
    }
    // On button click and double click change background and it content and make it reverse(on double click) -Ends



    return (
        <div className="d-flex">
                 <button style ={ { backgroundColor: bgC } } className="welcomeScreen" onClick={bgChange} onDoubleClick={bgReverse}>{nameC}</button>
        </div>
    );
}

export default Events;