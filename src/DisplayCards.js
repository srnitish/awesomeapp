import React from 'react';
import Card from './Cards';
import cardData from "./CardData";

// How Conditional If Statement works

// const favSeries = "amazon";
// const FavS = () => {
//     if (favSeries === "amazon"){
//         return(
//             <Card
//                     key={cardData[1].id}
//                     imgsrc={cardData[1].imgsrc}
//                     category={cardData[1].category}
//                     title={cardData[1].title }
//                     link={cardData[1].link}
//                 />
//         )
//     }
// else{
//         return(
//             <Card
//                     key={[cardData[0].id}
//                     imgsrc={[cardData[0].imgsrc}
//                     category={[cardData[0].category}
//                     title={[cardData[0].title }
//                     link={[cardData[0].link}
//                 />
//         )
//     }
// }

function DisplayCards() {
    // How Map Method works for looping all elements from Object/Json and display/render it on the frontend.
    const ncards = (cardValue, index) => {
        return(
            <Card
                    key={cardValue.id}
                    imgsrc={cardValue.imgsrc}
                    category={cardValue.category}
                    title={cardValue.title + -  `${index}` }
                    link={cardValue.link}
                />
        )
    }
    return (
        <>
             <Card
                imgsrc="https://picsum.photos/id/237/200/300"
                category="A Netflix Original Series"
                title="Extra Curriculam"
                link="https://www.google.com"
            />

             {cardData.map(ncards)};
            {/* syntax array.map(function fname(val,index,arr){return <> anything</>}); */}
        </>
    );
}

export default DisplayCards;