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

  update(bar, value){
    //setState w/ new hsla, then
    //props.adjustFilter(this.state.h, this.state.s, this.state.l, this.state.a);
  }

  render(){
    return(
    <div id='filter-bars'>
      <div className='bar-box'>
        <div className='bar' onClick={this.update('h', 'insert value')}>
          <div className='bar-position'></div>
        </div>
        <span className='bar-desc'>Hue</span>
      </div><div className='bar-box'>
        <div className='bar' onClick={this.update('s', 'insert value')}>
          <div className='bar-position'></div>
        </div>
        <span className='bar-desc'>Saturation</span>
      </div><div className='bar-box'>
        <div className='bar' onClick={this.update('l', 'insert value')}>
          <div className='bar-position'></div>
        </div>
        <span className='bar-desc'>Lightness</span>
      </div><div className='bar-box'>
        <div className='bar' onClick={this.update('a', 'insert value')}>
          <div className='bar-position'></div>
        </div>
        <span className='bar-desc'>Opacity</span>
      </div>
    </div>);
  }
}

export default FilterBars;