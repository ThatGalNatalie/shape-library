import React, { Component } from "react";
// import Lottie from 'react-lottie';

import Shape from "shape-library";

const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default class App extends Component {
  render() {
    return (
      <div style={box}>
        <div>
          <Shape
            type="animatedillustrations"
            category="SCENES"
            name="online buy products"
            theme={1}
          />
        </div>
      </div>
    );
  }
}
