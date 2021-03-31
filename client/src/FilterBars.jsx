import React from 'react';

class FilterBars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      h: props.filter[1],
      s: props.filter[2],
      l: props.filter[3],
      a: props.filter[4],
    }
  }
  onChange(event){
    //setState w/ new hsla, then
    props.adjustFilter(this.state.h, this.state.s, this.state.l, this.state.a);
  }
  render(){
    return(
    <div>

    </div>);
  }
}

export default FilterBars;