import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

class MainImage extends React.Component {
  constructor(props){
    super(props);
    this.componentRef = React.createRef();
  }
  render() {
    return(
      <div id='main-img-container'>
        <img ref={this.componentRef} id='main-img' src={this.props.image} />
        <button onClick={()=>{exportComponentAsPNG(this.componentRef)}}>Save Image</button>
      </div>
    );
  }
}

export default MainImage;