import React, { Component } from 'react';

import Shape from 'shape-library';

const box = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const item = {
  marginTop: 300
};

export default class App extends Component {
  render() {
    return (
      <div style={box}>
        <div style={item}>
          <Shape
            type='illustration'
            category='vibrant'
            size={50}
            name='growth'
            primaryColor='red'
            backgroundColor='blue'
          />
        </div>
      </div>
    );
  }
}
