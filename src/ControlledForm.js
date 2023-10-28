import React from 'react';
import { useState } from "react";

function ControlledForm() {

    const [form, setControlledForm] = useState({
        firstName: '',
        lastName:'',
        email: '',
        phone: ''
    })

    const inputEvent = (event) => {
        console.log(event.target.value);
    
        // const value = event.target.value;
        // const name = event.target.name;
            // OR
        const {value, name} = event.target;
    
        setControlledForm((preValue)=>{
            return{
                ...preValue,
                [name] : value,
                // ... is spread operator: which is used to inherit the previous elements of an Object/Array in the next Object/Array.
            }
        });
    };
                    // OR

    // on button submit display entered name on the UI -Starts
    // const [name, setName] = useState("");
    // const [fullName, setFullName] = useState("");

    // const[lname, setLName] = useState("");
    // const [lastName, setLastName] = useState("");

    // const inputEvent = (event) => {
    // console.log(event.target.value);
    // setName(event.target.value);
    // };

    // const inputEventLastName = (event) =>{
    //     setLName(event.target.value)
    // }


    // const onSubmitControlledForm = (event) => {
    // event.preventDefault();
    // setFullName(name);
    // setLastName(lname);
    // };
    // on button submit display entered name on the UI Ends

       

    const onSubmitControlledForm = (event) => {
        event.preventDefault();
        alert("Form Submitted!!");
        };
    return (
        <>
                <form onSubmit={onSubmitControlledForm}>
                    <div>
                        <h1>{form.firstName} {form.lastName}</h1>
                        <h2>{form.email}</h2>
                        <h2>{form.phone}</h2>
                        <br/>

                        <input type="text" name="firstName" placeholder="Enter First Name"
                            onChange={inputEvent} value={form.firstName} required/>
                        <br/>
                        <input type="text" name="lastName" placeholder="Enter Last Name"
                            onChange={inputEvent} value={form.lastName} required/>
                        <br/>           
                        <input type="email" name="email" placeholder="Enter Email"
                            onChange={inputEvent} value={form.email} required/>
                        <br/>
                        <input type="number" name="phone" placeholder="Enter Phone Number"
                            onChange={inputEvent} value={form.phone} required/>
                        <br/>
                        <button type="submit">Click Here!!</button>
                    </div>
                </form>
            </>
    );
}

export default ControlledForm;