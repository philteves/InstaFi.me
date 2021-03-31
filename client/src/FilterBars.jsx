import React from 'react';

class FilterBars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      altered: false,
      h: props.filter[1],
      s: props.filter[2],
      l: props.filter[3],
      a: props.filter[4],
      contrast: props.filter[5],
      blur: props.filter[6]
    }
    this.update = this.update.bind(this);
  }

  update(bar, value){
    this.setState({altered: true});
    //setState w/ new hsla, then
    //props.adjustFilter(this.state.h, this.state.s, this.state.l, this.state.a);
  }

  render(){
    let save = <div></div>
    if(this.state.altered){
      save = <button>Save Filter</button>;
    }
    return(
    <div>
    {save}
      <div id='filter-bars'>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('contrast', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.contrast / 5) + '%'}}></div>
          </div>
          <span className='bar-desc'>Contrast</span>
          <span>{this.state.contrast}%</span>

        </div>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('h', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.h / 3.6) + '%'}}></div>
          </div>
          <span className='bar-desc'>Hue</span>
          <span>{this.state.h}</span>
        </div>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('s', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.s / 4) + '%'}}></div>
          </div>
          <span className='bar-desc'>Saturation</span>
          <span>{this.state.s}%</span>
        </div>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('l', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.l / 2) + '%'}}></div>
          </div>
          <span className='bar-desc'>Lightness</span>
          <span>{this.state.l}%</span>

        </div>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('a', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - this.state.a + '%'}}></div>
          </div>
          <span className='bar-desc'>Opacity</span>
          <span>{this.state.a}%</span>
        </div>
        <div className='bar-box'>
          <div className='bar' onClick={()=>{this.update('blur', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.blur * 20) + '%'}}></div>
          </div>
          <span className='bar-desc'>Blur</span>
          <span>{this.state.blur}px</span>
        </div>
      </div>
    </div>);
  }
}

export default FilterBars;