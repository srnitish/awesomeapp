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

    const handleSentences = () =>{ 
        let sentence = currentState.length+0;
         sentence = currentState.split(". ").length - 1;
          console.log(sentence);
        //   document.write(sentence);
        return sentence;
    }
    

    

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
            <div className="container main-body" style={{color: props.mode==="black"?"white":"black" }}>
                <div className='row'>
                    <div className='col-md-9 mx-auto main'>
                        <div className="form-floating">
                            <textarea onChange={handleChange} value={currentState} style={{backgroundColor: props.mode==="black"?"white":"black" , color: props.mode==="black"?"black":"white" ,height: "210px"}} className="form-control" placeholder="Leave a comment here" id="textarea"></textarea>
                            <label htmlFor="textarea">Enter Something To Transform!!</label>
                        </div>
                        <button onClick={handleUpparcase}  className="btn btn-sm btn-primary my-2 mx-1"> Click For UpperCase</button>
                        <button onClick={handleLowercase}  className="btn btn-sm btn-secondary my-2"> Click For LowerCase</button>
                        {/* <button onClick={clickDarkLightModeHandle}  className="btn btn-sm btn-danger my-2"> {btnText}</button> */}
                        <button onClick={handleSelectAll} className="btn btn-sm btn-success my-2 mx-1"> Select All Text </button>
                        <button onClick={handleCopy} className="btn btn-sm btn-danger my-2"> Copy Text </button>
                        <button onClick={handleSpace} className="btn btn-sm btn-warning my-2 mx-1"> Remove ExtraSpace </button>
                        <button onClick={handleClear} className="btn btn-sm btn-info my-2"> Clear All </button>
                        {/* <button onClick={handleSentences} className="btn btn-sm btn-danger my-2"> Count Sentence </button> */}


                    </div>
                </div>

                <div className='row mx-0'>
                <div className='col-md-6 mx-5 summary px-5'>
                    <div className='my-3 mx-5 summary-main' style={{backgroundColor: props.mode==="black"?"white":"black" , color: props.mode==="black"?"black":"white" }}>
                        
                            <div><h5>Total Word Entered:</h5> <span>{currentState.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {currentState.length} character(s) including space.</span></div>
                            <p>{0.008 * currentState.split(" ").filter((element)=>{return element.length!==0}).length} Min Read</p>
                            <p>No. of Sentence: <span>{handleSentences()}</span></p>
                        </div>
                    </div>
                </div>

            </div>

            
            
        </>
    );
}

export default Home;