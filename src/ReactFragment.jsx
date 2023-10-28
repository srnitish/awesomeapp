import React from "react";

let CurrDate = new Date().toLocaleDateString();
let CurrTime = new Date().toLocaleTimeString();
const flname = "Nitish Srivastava";
const luckyNumber = 5;

function ReactFragment() {
    return (
        <>
        <h1> Hello World!! My Full Name is {flname} </h1>
        <h2>And My Lucky Number is {luckyNumber}</h2>
        <h3>And the 33 + 33 is {33+33}</h3>
        </>,

        [ 
        <h1>Today Date is : {CurrDate}</h1>,
        <p>Current Time is : {CurrTime}</p>
        ]

    // If we want to use multiple jsx element the we have to follow any one of the below approach
    // [ <h1> Hello World!! </h1>,  
    //    <p> Hello Its my first React App </p>
    // ],

    // <div>
    // <h1> Hello World!! </h1>,   
    // <p> Hello Its my first React App </p>  
    // </div> ,

    // <React.Fragment>
    //   <h1> Hello World!! </h1>
    //   <p> Hello Its my first React App </p>
    // </React.Fragment>,
    );
}


export default ReactFragment;