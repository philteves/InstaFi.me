import React from 'react';

const MainImage = (props) => {
  return(
    <div id='main-img-container'>
      <img id='main-img' src={props.image} />
    </div>
  );
}

export default MainImage;