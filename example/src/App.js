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
          <Shape type='icons' category='complex-filled' size={50} name='lock' theme={1} />
        </div>
      </div>
    );
  }
}
