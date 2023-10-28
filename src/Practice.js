import React from 'react';
import myFavLanguage, {myFavSubject, myFavMovie, myFavPlace, myFavCountry} from "./ImportExport";


function Practice() {
    return (
         <>
            <ol>
                <li>My Favourite Subject is {myFavLanguage}</li>
                <li>My Favourite Subject is {myFavSubject}</li>
                <li>My Favourite Movie is {myFavMovie}</li>
                <li>My Favourite Place is {myFavPlace()}</li>
                <li>My Favourite place is {myFavPlace()} & My Favourite Country is {myFavCountry()}</li>
            </ol>

         </>

    );
}

export default Practice;