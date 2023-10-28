import axios from "axios";
import React, { useEffect, useState }  from "react";
import Spinner from 'react-bootstrap/Spinner';


const AxiosTutorial = () => {
    const [userData, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // First Method
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response)
                setLoading(false);
                setData(response.data)
                
            })
        },2000)
    },[])


    // Second Method
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(()=>{
    //         const myFunction = async ()=>{
    //             try{
    //                 const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    //                 console.log(result.data)
    //                 setData(result.data)
    //             }catch(error){
    //                 console.error(error)
    //             }
    //             setLoading(false);
    //         };myFunction();
    //     },5000)
    // },[])



    return(
        
        <>
        {loading ? (
            <div className="spinner">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
           ): 
            <div style={{marginTop: "100px"}}>
            <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
            </tr>
                {userData.map((data)=>{
                    return(
                        <>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                        </>
                    )
                })}
                </table>
            </div>
        } {/* Ternary operator ends here for the loader */}
        </>
    )
}

export default AxiosTutorial;