import React from 'react';
import { useState } from 'react';

function UpdatedTime() {
    // Get updated time using react hooks -starts
    // const newTime = new Date().toLocaleTimeString();
    // const [cTime, updatedCTime] = useState(newTime);

    // const GetTimes = () => {
    //     newTime = new Date().toLocaleTimeString();
    //     updatedCTime(newTime);
    // };
    // Get updated time using react hooks -ends

    // useState is a react hooks that must be called inside in the react function
    // const state = useState();

    // Here we are using array de-structuring.
    // const [count, setCount] = useState(0);
    // const incNum = () =>{
    //     setCount(count + 1);
    // }

    return (
        <>
             {/* <h1> { count }</h1>
            <button onClick={incNum}>Click Me</button> */}

            {/* <>
                <div>
                    <h1>My current time :{cTime} </h1>
                    <button onClick={GetTimes()}>Get RealTime</button>
                </div>
            </> */}
        </>
    );
}

export default UpdatedTime;