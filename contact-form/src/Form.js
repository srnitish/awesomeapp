import React, { useState } from 'react';


function Form({FormData}) {
    // console.log({FormData}, "Comming from App.js");
    const [contactFormField, setcontactFormField] = useState({name: '', email: ''});

    // In the below function "Event Handler is happening".
    // Here we compare with the field name and the value we entered in the field, that should be equal value and equal type. 
    // If true, we will update the array with the existing contactFormField data and the store the value of field name that we entered in the form field.
    const handleChange = (e) =>{
        if(e.target.name === "name"){
            setcontactFormField({...contactFormField, name: e.target.value})
        }else{
            setcontactFormField({...contactFormField, email: e.target.value})
        }
    }

    // Here, we use HandleAdd to perform the action on the button click.
    // In this we first check, if the contactFormField's name has null value then alert wil be happened.
    // we use return, because if there is no value in the form field and we hit the submit then this "return" will prevent to store the blank array.
    const HandleAdd = () =>{
        if(contactFormField.name === "" || contactFormField.email === ""){
            alert("Please Enter The Details");
            return
        }
        FormData(contactFormField);
        // juhi(contactFormField, "This Function is available in App.js i.e parent and its data is going from child i.e Form.js to Parent i.e App.js")
        setcontactFormField({name: '', email:''});
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row mx-1 mt-3'>
                    <div className='col-6'>
                        <form>
                            <div className="mb-3">
                                <label className="form-label d-flex">Name</label>
                                <input type="text" name='name' value={contactFormField.name} onChange={handleChange} className="form-control"  aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label d-flex">Email address</label>
                                <input type="email" name='email' value={contactFormField.email} onChange={handleChange} className="form-control" aria-describedby="emailHelp"/>
                            </div>
                        </form>
                    <button onClick={HandleAdd} className="btn btn-primary d-flex">Add Contact</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;