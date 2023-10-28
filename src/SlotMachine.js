import React from 'react';

function SlotMachine() {

// Below is the function
const SlotMachine = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if((x===y) && (y===z)){
        return(
            <>
                <span className="WelcomeScreen">{x} {y} {z}</span>
                <h6>This is Matching.</h6>
            </>
        )
    }else{
        return(
            <>
                <span className="WelcomeScreen">{x} {y} {z}</span>
                <h6>This is Not Maching.</h6>
            </>
        )
    }
}



    return (
             <>
                <div>
                    <SlotMachine x = '😃' y = '😃' z = '😃'/>
                    <hr/>
                    <SlotMachine x = '😃' y = '😀' z = '🍎'/>
                    <hr/>
                </div>
            </> 
    );
}

export default SlotMachine;