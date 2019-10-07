import React, { Component } from 'react';

import ShapeIcons from 'shape-library';

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
          <ShapeIcons
            type='illustrations'
            category='abstract'
            size={100}
            name='bookmark'
            primaryColor='red'
            secondaryColor='red'
          />
        </div>
      </div>
    );
  }
}
