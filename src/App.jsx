import React, { useEffect, useState } from "react";
import PicsumGallery from './PicsumGallery';
import WelcomeScreen from "./WelcomeScreen";
import ReactFragment from './ReactFragment';
import TemplateLiterals from './TemplateLiterals';

import AxiosTutorial from './AxiosTutorial';
import axios from "axios";
import ControlledForm from "./ControlledForm";
import DisplayCards from "./DisplayCards";
import SlotMachine from "./SlotMachine";
import Events from "./Events";
import UpdatedTime from "./UpdatedTime";
import Practice from "./Practice";
import ToDoList from './ToDoList';


// How Ternary operator works
// Condition Statement ? If Condition Satisfy, will execute this part : Otherwise this part will execute

const App = () =>{
    return(
        <>
            <ToDoList/>
            <AxiosTutorial/> 
            {/* <WelcomeScreen/>
            <ReactFragment/> 
            <TemplateLiterals/>  */}

            {/* <FavS /> */}
            {/* 
            <ControlledForm/>
            <DisplayCards/>
            <Events/>
            <UpdatedTime/>
            <Practice/> */}
            {/* <SlotMachine/> */}
            {/* <PicsumGallery/> */}
            
        </>
    );
}

export default App;