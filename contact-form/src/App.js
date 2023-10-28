import './App.css';
import Header from './Header';
import Form from './Form';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
import Footer from './Footer';

function App() {

  //Here we store the contactListData as key into the localStorageKey.
  const localStorageKey = "contactListData";

  // cont[contactListData, setContactListData] = useState([]);
  const [contactListData, setContactListData] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contactListData))
  },[contactListData])


  // In this function we pass the props/function from the parent component(app.js) to the child component(Form.js)
  // we pass uuid4 method into the setContactListData, so that each item can get the unique id, which will be helpful to delete the particula item from the array.
  const FormData = (data) =>{
    // console.log(data, "Coming From App.Js File" );
    setContactListData([...contactListData,{id: uuid4(), data}]);
  }


  // The Below Function is used to delete the items
  // We use Filter Method to delete/filter the items, we clicked.
  // In the below function we use/padd the "id" as a parameter to filter out the item that we clicked to filter or delete.
  const deleteData = (id) =>{
    const updatedList = contactListData.filter((val)=>{
      return val.id !== id;
    })
    setContactListData(updatedList);
  }


  return (
    <div className="App">
      <Header/>
      <Form FormData = {FormData}/>
      <ContactList contactListData={contactListData} deleteData={deleteData} />


      <Footer name = "Nitish"/>
      <Footer name = "Innaya"/>
      <Footer name = "Aviral"/>
      <Footer name = "{Juhi}"/>

      {/* Here, we are using name as a variable, which contains the different values in App.js  */}
      {/* In Footer.js File, we access the value of name, which the help of props, that we get with the help of props, which we pass in the funtion as a perameter. */}
    
    </div>
  );
}

export default App;
