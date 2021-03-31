import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      filterH: null,
      filterS: null,
      filterL: null,
      filterA: null,
    }
    this.addImage = this.addImage.bind(this)
  }

  addImage(event){
    console.log('img: ', event.target.files[0]);
    this.setState({image: URL.createObjectURL(event.target.files[0])});
  }

  render(){
    if(this.state.image === null){
      return(
      <div>
        <input type='file' id='user-image' accept='image/*' onChange={this.addImage}/>
      </div>);
    } else {
      return(
        <div>
          <h1>Here</h1>
          <img src={this.state.image}/>
        </div>
      );
    }
  }
}

export default App;
