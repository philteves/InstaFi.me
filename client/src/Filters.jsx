import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Filters = (props) => {
  return(
    <div>
      {props.filters.map((filter)=>{
        return(
          <Thumbnail key={JSON.stringify(filter)}filter={filter} image={props.image} changeFilter={props.changeFilter}></Thumbnail>
        );
      })}
    </div>
  );
}

export default Filters;