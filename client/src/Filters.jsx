import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Filters = (props) => {
  return(
    <div id='filter-list'>
      {props.filters.map((filter)=>{
        return(
          <Thumbnail key={JSON.stringify(filter)}filter={filter} image={props.image} changeFilter={props.changeFilter} adjustFilter={props.adjustFilter}></Thumbnail>
        );
      })}
    </div>
  );
}

export default Filters;