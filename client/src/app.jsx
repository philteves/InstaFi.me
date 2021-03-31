import React from 'react';
import Filters from './Filters.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      filters: [ //array format [Filter Name, hue, saturation, lightness, opacity]
        ['Red Hot', 0, 100, 95, 20],
        ['Ice Cold', 220, 100, 90, 20]
      ],
      currentFilter: null
    }
    this.addImage = this.addImage.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  addImage(event){
    this.setState({image: URL.createObjectURL(event.target.files[0])});
  }

  changeFilter(event){
    console.log('changing filter');
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
          <img src={this.state.image}/>
          <Filters image={this.state.image} filters={this.state.filters} changeFilter={this.changeFilter}></Filters>
        </div>
      );
    }
  }
}

export default App;
