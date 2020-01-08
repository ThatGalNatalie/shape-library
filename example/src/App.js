import React, { Component } from "react";
// import Lottie from 'react-lottie';

import Shape from "shape-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Shape
            type="animatedicons"
            category="SIMPLE-ANIMATED"
            name="subtract"
            primaryColor="#808000"
            secondarColor="#000"
          />
        </div>
      </div>
    );
  }
}
