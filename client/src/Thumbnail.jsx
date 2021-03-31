import React from 'react';

const Thumbnail = (props) => {
  return(
    <div className='thumbnail' onClick={()=>{props.adjustFilter(props.filter[1],props.filter[2],props.filter[3],props.filter[4])}}>
      <img className='thumbnail-img' src={props.image}
      style={{filter: `hue-rotate(${props.filter[1]}deg) saturate(${props.filter[2]}%) brightness(${props.filter[3]}%) opacity(${props.filter[4]}%) contrast(${props.filter[5]}%) blur(${props.filter[6]}px)`}}/>
      <span className='filter-name'>{props.filter[0]}</span>
    </div>
  );
}

export default Thumbnail;