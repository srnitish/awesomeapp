import react from 'react';
import './index.css';

const img1 ="https://picsum.photos/200/300";
const img2 = "https://picsum.photos/id/237/200/300";
const link = 'https://www.google.com';
const inlineStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0px',
  padding: '0px',
  border: '1px solid #000'

};

function PicsumGallery() 
{
   return (
   <>
    <div className='gallery' style={inlineStyle}>
         <h1><a href={link} target='_blank'>Click Here</a> to go to Google Website</h1>
         <img src={img1} alt='picsum_Img'/>
         <img src={img2} alt='picsum_Img' />
    </div>
   </>
   );
}

export default PicsumGallery;