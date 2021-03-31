import React from 'react';
import Filters from './Filters.jsx';
import MainImage from './MainImage.jsx';
import FilterBars from './FilterBars.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      filters: [ //array format [Filter Name, hue, saturation, lightness, opacity]
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Ice Cold', 220, 100, 90, 20],
      ['Plain Jane', 0, 0, 0, 0],
      ['Red Hot', 0, 100, 95, 20]
      ],
      currentFilter: ['Ice Cold', 220, 100, 90, 20]
    }
    this.addImage = this.addImage.bind(this);
    this.selectPreset = this.selectFilter.bind(this);
    this.adjustFilter = this.adjustFilter.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  addImage(event){
    this.setState({image: URL.createObjectURL(event.target.files[0])});
  }

  removeImage(){
    this.setState({image: null});
  }

  selectPreset(event){ //swaps active filter with a dif preset from state.filters
    console.log('changing filter');
  }

  adjustFilter(h,s,l,a){ //sets active filter to custom settings designated in FilterBars
    console.log('adjusting filter');
    let custom = ['Custom', h, s, l, a];
    let root = document.documentElement;
    root.style.setProperty('--filter-hue', h + 'deg');
    root.style.setProperty('--filter-saturate', s + '%');
    root.style.setProperty('--filter-bright', l + '%');
    root.style.setProperty('--filter-opacity', a + '%');
    this.setState({currentFilter: custom});
  }

  render(){
    if(this.state.image === null){
      return(
      <div>
        <h1 id='banner'>InstaFi.me</h1>
        <input type='file' id='add-image' className='top-btn' accept='image/*' onChange={this.addImage}/>
      </div>);
    } else {
      return(
        <div>
          <h1 id='banner'>InstaFi.me</h1>
          <button className='top-btn' onClick={this.removeImage}>&#128260;</button>
          <div id="main-content">
            <MainImage image={this.state.image} filter={this.state.currentFilter}/>
            <FilterBars filter={this.state.currentFilter} adjustFilter={this.adjustFilter}></FilterBars>
          </div>
          <Filters image={this.state.image} filters={this.state.filters} selectPreset={this.selectPreset}></Filters>
        </div>
      );
    }
  }
}

export default App;
