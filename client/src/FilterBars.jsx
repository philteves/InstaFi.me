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
    this.updateInput = this.updateInput.bind(this);
  }

  update(e, bar, value){
    console.log('event: ', e);
    console.log('Implement me!!');
    this.setState({altered: true});
    //setState w/ new hsla, then
    //this.props.adjustFilter(this.state.h, this.state.s, this.state.l, this.state.a, this.state.contrast, this.state.blur);
  }
  updateInput(e){
    let property = e.target.name;
    let value = e.target.value;
    this.setState({altered: true, [property]: parseInt(value)}, () => {
      console.log('there: ', JSON.stringify(this.props.adjustFilter));
      this.props.adjustFilter(this.state.h, this.state.s, this.state.l, this.state.a, this.state.contrast, this.state.blur);
    });
  }

  render(){
    let save = <div></div>
    if(this.state.altered){
      save = <button id='save-filter-btn'>Save Filter</button>;
    }
    return(
    <div>
    {save}
      <div id='filter-bars'>
        <div className='bar-box'>
          <div className='bar' id='contrast-bar' onClick={()=>{this.update(this, 'contrast', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.contrast / 5) + '%'}}></div>
          </div>
          <span className='bar-desc'>Contrast</span>
          <span>{this.state.contrast}%</span>
          <input type='number' className='bar-input' name="contrast" min='0' step='10' max='500' value={this.state.contrast} onChange={(e)=>{this.updateInput(e)}}></input>

        </div>
        <div className='bar-box'>
          <div className='bar' id='hue-bar' onClick={()=>{this.update('h', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.h / 3.6) + '%'}}></div>
          </div>
          <span className='bar-desc'>Hue</span>
          <span>{this.state.h}</span>
          <input type='number' name="h" min='0' step='10' max='360' value={this.state.h} onChange={(e)=>{this.updateInput(e)}}></input>
        </div>
        <div className='bar-box'>
          <div className='bar' style={{background: `linear-gradient(to bottom, hsl(${this.state.h},400%, 50%), hsl(${this.state.h}, 0%, 50%))`}} onClick={()=>{this.update('s', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.s / 4) + '%'}}></div>
          </div>
          <span className='bar-desc'>Saturation</span>
          <span>{this.state.s}%</span>
          <input type='number' name="s" min='0' step='10' max='400' value={this.state.s} onChange={(e)=>{this.updateInput(e)}}></input>
        </div>
        <div className='bar-box'>
          <div className='bar' style={{background: `linear-gradient(to bottom, hsl(${this.state.h},100%, 200%), hsl(${this.state.h}, 100%, 0%))`}} onClick={()=>{this.update('l', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.l / 2) + '%'}}></div>
          </div>
          <span className='bar-desc'>Lightness</span>
          <span>{this.state.l}%</span>
          <input type='number' name="l" min='0' step='10' max='200' value={this.state.l} onChange={(e)=>{this.updateInput(e)}}></input>

        </div>
        <div className='bar-box'>
          <div className='bar' style={{background: `linear-gradient(to bottom, hsla(${this.state.h},100%, 50%, 100%), hsla(${this.state.h}, 100%, 50%, 0%))`}} onClick={()=>{this.update('l', 'insert value')}} onClick={()=>{this.update('a', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - this.state.a + '%'}}></div>
          </div>
          <span className='bar-desc'>Opacity</span>
          <span>{this.state.a}%</span>
          <input type='number' name="a" min='0' step='10' max='100' value={this.state.a} onChange={(e)=>{this.updateInput(e)}}></input>
        </div>
        <div className='bar-box'>
          <div className='bar' id='blur-bar' onClick={()=>{this.update('blur', 'insert value')}}>
            <div className='bar-position' style={{top: 100 - (this.state.blur * 20) + '%'}}></div>
          </div>
          <span className='bar-desc'>Blur</span>
          <span>{this.state.blur}px</span>
          <input type='number' name="blur" min='0' step='1' max='5' value={this.state.blur} onChange={(e)=>{this.updateInput(e)}}></input>
        </div>
      </div>
    </div>);
  }
}

export default FilterBars;