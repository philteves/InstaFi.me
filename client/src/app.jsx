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
      ['B&W Haze', 260, 5, 140, 100, 40, 0],
      ['B&W Stark', 10, 5, 110, 100, 310, 0],
      ['B&W Cool', 260, 5, 140, 100, 80, 0],
      ['B&W Hot', 20, 5, 110, 100, 120, 0],
      ['Ice Cold', 220, 20, 90, 100, 130, 0],
      ['Sin City', 20, 13, 110, 100, 160, 0],
      ['Plain Jane', 0, 100, 100, 100, 100, 0],
      ['Pastel', 0, 250, 100, 100, 90, 0],
      ['Stark Contrast', 0, 110, 100, 100, 310, 0],
      ['Dark Soul', 0, 50, 70, 100, 270, 0],
      ['Seen The Light', 0, 90, 180, 100, 90, 0],
      ['Nostalgia', 45, 70, 100, 90, 100, 1],
      ['The Blues', 180, 30, 110, 90, 120, 1],
      ['Sepia', 45, 50, 90, 90, 410, 1],
      ['Ultraviolet', 280, 80, 180, 100, 300, 1],
      ['Red Hot', 5, 350, 150, 90, 100, 0],
      ['Homeric', 45, 170, 130, 100, 210, 0],
      ['Get Shrekt', 60, 200, 100, 100, 100, 0],
      ['Hulk Smash', 80, 400, 120, 100, 100, 0],
      ['Tobias Funke', 210, 110, 120, 100, 100, 0]
      ],
      currentFilter: ['Plain Jane', 0, 100, 100, 100, 100, 0]
    }
    this.addImage = this.addImage.bind(this);
    this.adjustFilter = this.adjustFilter.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.newFilter = this.newFilter.bind(this);
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

  newFilter(filter){
    let filterList = this.state.filters;
    filterList.push(filter);
    this.setState({filters: filterList});
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
            <FilterBars filter={this.state.currentFilter} adjustFilter={this.adjustFilter} newFilter={this.newFilter}></FilterBars>
          </div>
          <Filters image={this.state.image} filters={this.state.filters} adjustFilter={this.adjustFilter}></Filters>
        </div>
      );
    }
  }
}

export default App;
