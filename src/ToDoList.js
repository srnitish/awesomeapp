import React, { useRef, useState } from "react";
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const inputData = useRef('');

    const itemEvent = (event) => {
        setInputList(event.target.value);
        inputData.current.style.color="Red";
    };

    const listOfItems = () => {
        // oldItems is a variable, which holds the array element that useState[] has already or previously having into it.
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
        inputData.current.focus();
       
    };

    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((elements, index) =>{
                return index !== id;
            });
        });
    };

    return(
        <>
        <div>
        <div>
        <span>{inputList}</span> <br/>
            <input ref={inputData} type="text" placeholder="Enter the value" value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}>Submit</button>
        </div>
       
        <br/>
        <div>
            <ol>
                {Items.map((Items, index)=>{
                    return <ToDoListItem key={index} id={index} text={Items} onSelect={deleteItems}/>
                })}
            </ol>
        </div>
        </div>
        
    </>
    )
};

export default ToDoList;