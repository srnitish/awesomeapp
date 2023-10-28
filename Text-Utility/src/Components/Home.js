import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";


function Home(props) {
    // const navigate = useNavigate();
    // const myStyle = {
    //     textarea:{
    //         ':focus' : {
    //             outline: "none",
    //             border: "none",
    //         },
    //         ':hover' :{
    //             outline: "none",
    //             border: "none",
    //         }
    //     }
    // }

    const[currentState, updatedState] = useState('');

    const handleUpparcase = () => {
        let newResult = currentState.toUpperCase();
        if(newResult === ""){
            props.showAlert("Please enter something to convert!!", "warning");
        }else{
            updatedState(newResult);
            props.showAlert("Text has now been coverted to uppercase!!", "success");
        }
        
    };
    
    const handleLowercase = () => {
        let newResult = currentState.toLowerCase();
        if (newResult === ""){
            props.showAlert("Please enter something to convert!!", "warning");
        }else{
            updatedState(newResult);
            props.showAlert("Text has now been coverted to Lowercase!!", "success");
        }
        
    };

    const handleCopy = () => {
        var copy = document.getElementById("textarea");
        if(copy.value === ""){
            props.showAlert("Please enter something to Copy!!", "warning");
        }else{
            copy.select();
            navigator.clipboard.writeText(copy.value);
            props.showAlert("Text has now been Copied!!", "success");
        };
    } 

    const handleSelectAll = () =>{
        var copy = document.getElementById("textarea");
        if(copy.value === ""){
            props.showAlert("Please enter something to Select!!", "warning");
        }
        else{
            copy.select()
            props.showAlert("Text has now been Selected!!", "success");
        }       
    }

    const handleClear = () =>{
        updatedState(' ');
        props.showAlert("TextBox has now been cleared!!", "success");
    }

    const handleSpace = () =>{
        let copy = currentState.split(/[ ]+/);
        updatedState(copy.join(' '));
        props.showAlert("Extra space has now been removed!!", "success");
    }

    const handleChange = (event) => {
         updatedState(event.target.value); 
    };

    // const [btnText, setBtnText] = useState('Enable Dark Mode'); 
    // Toggle Button Name

    // const[currentMode, updatedMode] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // });


    // const clickDarkLightModeHandle = () =>{
    //     if(currentMode.backgroundColor == "white"){
    //         updatedMode({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Enable Light Mode");
    //     }else{
    //         updatedMode({
    //             color: "black",
    //             backgroundColor: "white"
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // };



    return (
        <>
            <div className="container my-1 py-5" style={{color: props.mode==="black"?"white":"black" }}>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <div className="form-floating">
                            <textarea onChange={handleChange} value={currentState} style={{backgroundColor: props.mode==="black"?"white":"black" , color: props.mode==="black"?"black":"white" ,height: "210px"}} className="form-control" placeholder="Leave a comment here" id="textarea"></textarea>
                            <label htmlFor="textarea">Enter Something To Transform!!</label>
                        </div>
                        <button onClick={handleUpparcase}  className="btn btn-sm btn-danger my-2 mx-1"> Click For UpperCase</button>
                        <button onClick={handleLowercase}  className="btn btn-sm btn-danger my-2"> Click For LowerCase</button>
                        {/* <button onClick={clickDarkLightModeHandle}  className="btn btn-sm btn-danger my-2"> {btnText}</button> */}
                        <button onClick={handleSelectAll} className="btn btn-sm btn-danger my-2 mx-1"> Select All Text </button>
                        <button onClick={handleCopy} className="btn btn-sm btn-danger my-2"> Copy Text </button>
                        <button onClick={handleSpace} className="btn btn-sm btn-danger my-2 mx-1"> Remove ExtraSpace </button>
                        <button onClick={handleClear} className="btn btn-sm btn-danger my-2"> Clear All </button>
                    </div>
                </div>
                <div className='my-2 mx-5 my-0' style={{backgroundColor: props.mode==="black"?"white":"black" , color: props.mode==="black"?"black":"white" }}>
                {/* <div className='row'> */}
                    <div className='col-md-6 mx-5'>
                        <div><h5>Total Word Entered:</h5> <span>{currentState.split(" ").length} words and {currentState.length}</span></div>
                        <p>{0.008 * currentState.split(" ").length} Min Read</p>
                    </div>
                {/* </div> */}
            </div>
            </div>

            
            
        </>
    );
}

export default Home;