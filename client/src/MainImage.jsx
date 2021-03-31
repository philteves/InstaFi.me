import React from 'react';

const MainImage = (props) => {
  return(
    <div id='main-img-container'>
      <div id='main-img-filter'></div>
      <img id='main-img' src={props.image} />
    </div>
  );
}

export default MainImage;