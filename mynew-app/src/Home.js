import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


function Home() {
    const refElement = useRef('');
    console.log(refElement);

    const [roomId, setRoomId] = useState("1223");
    const navigate = useNavigate();
    
    const  GotoRoom = () =>{
        navigate(`/room/${roomId}`)
    };

    const btnReset = () =>{
        setRoomId("");
        refElement.current.style.color = 'red'
        refElement.current.focus();
    }


    const handleInput = () => {
       refElement.current.style.color = "red";
    }

    return (
        <div>
            <input ref={refElement} type='text' placeholder='Enter ROOM ID' value={roomId} onChange={e =>setRoomId(e.target.value)}/>
            <button onClick={GotoRoom}>Goto ROOM</button>
            <button onClick={btnReset}>Reset</button>
            <button onClick={handleInput}>Manupulate DOM Using useRef Hook</button>
        </div>
    )
}

export default Home;