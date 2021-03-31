import React from 'react';

const Thumbnail = (props) => {
  return(
    <div className='thumbnail'>
      <div className='thumbnail-filter'></div>
      <img className='thumbnail-img' src={props.image}></img>
      <span className='filter-name'>{props.filter[0]}</span>
    </div>
  );
}

export default Thumbnail;