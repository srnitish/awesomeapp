import React from "react";

const flname = "Nitish Srivastava";
const luckyNumber = 5;

function TemplateLiterals() {
    return (
        //Template Literals
        <>
            <h1>My Full Name is {`${flname} and my lucky number is ${luckyNumber}`}</h1>
        </>
    );
}



export default TemplateLiterals;