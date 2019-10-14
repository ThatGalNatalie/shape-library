import React, { Component } from 'react';

import Shape from 'shape-library';

const box = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default class App extends Component {
  render() {
    return (
      <div style={box}>
        <div>
          <Shape type='icons' category='blue' name='mic off' theme={1} />
          <Shape type='illustrations' category='Scenes' name='Editing (Male)' theme={1} />
        </div>
      </div>
    );
  }
}
