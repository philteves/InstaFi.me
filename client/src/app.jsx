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
      ['Plain Jane', 0, 0, 0, 0],
      ['Red Hot', 0, 100, 95, 20]
      ],
      currentFilter: ['Plain Jane', 0, 0, 0, 0]
    }
    this.addImage = this.addImage.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.adjustFilter = this.adjustFilter.bind(this);
  }

  addImage(event){
    this.setState({image: URL.createObjectURL(event.target.files[0])});
  }

  removeImage(){
    this.setState({image: null});
  }

  selectFilter(event){ //swaps active filter with a dif preset from state.filters
    console.log('changing filter');
  }

  adjustFilter(h,s,l,a){ //sets active filter to custom settings designated in FilterBars
    console.log('adjusting filter');
    let custom = ['Custom', h, s, l, a];
    this.setState({currentFilter: custom});
  }

  render(){
    if(this.state.image === null){
      return(
      <div>
        <h1 id='banner'>InstaFi.me</h1>
        <input type='file' id='add-image' accept='image/*' onChange={this.addImage}/>
      </div>);
    } else {
      return(
        <div>
          <h1 id='banner'>InstaFi.me</h1>
          <button onClick={this.removeImage}>Refresh Icon</button>
          <MainImage image={this.state.image} filter={this.state.currentFilter}/>
          <FilterBars filter={this.state.currentFilter} adjustFilter={this.adjustFilter}></FilterBars>
          <Filters image={this.state.image} filters={this.state.filters} selectFilter={this.selectFilter}></Filters>
        </div>
      );
    }
  }
}

export default App;
