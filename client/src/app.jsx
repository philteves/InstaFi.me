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
      ['Ice Cold', 220, 100, 90, 100, 100, 0],
      ['Plain Jane', 0, 100, 100, 100, 100, 0],
      ['Red Hot', 360, 400, 200, 100, 100, 0]
      ],
      currentFilter: ['Plain Jane', 0, 100, 100, 100, 100, 0]
    }
    this.addImage = this.addImage.bind(this);
    this.adjustFilter = this.adjustFilter.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  addImage(event){
    this.setState({image: URL.createObjectURL(event.target.files[0])});
  }

  removeImage(){
    this.setState({image: null});
  }

  adjustFilter(h,s,l,a,c,b){ //sets active filter to custom settings designated in FilterBars
    let custom = ['Custom', h, s, l, a, c, b];
    let root = document.documentElement;
    root.style.setProperty('--filter-hue', h + 'deg');
    root.style.setProperty('--filter-saturate', s + '%');
    root.style.setProperty('--filter-bright', l + '%');
    root.style.setProperty('--filter-opacity', a + '%');
    root.style.setProperty('--filter-contrast', c + '%');
    root.style.setProperty('--filter-blur', b + 'px');
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
          <Filters image={this.state.image} filters={this.state.filters} adjustFilter={this.adjustFilter}></Filters>
        </div>
      );
    }
  }
}

export default App;
