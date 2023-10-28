import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ContactList(props) {
    const {contactListData, deleteData} = props
    // console.log(contactListData);

    const contactList = contactListData.map((val)=>{
        return(
            <>
                <div>
                    <div>{val.data.name}</div>
                    <div>{val.data.email}</div>
                    <span onClick={()=>deleteData(val.id)}><DeleteForeverIcon/></span>
                </div>
            </> 
        )
    })
    
    return (
        <div className="container-full mt-3">
            <div className="row">
                <h3 className='text-start px-4 bg-black p-2 text-white'>Contact List</h3>
                <div className='list-group px-2'>
                    <div className="col-12 p-3">
                            <div className='list-group-item list-group-item-action main'>{contactList} </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactList;