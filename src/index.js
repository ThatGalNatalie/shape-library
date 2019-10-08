import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../config';
import Illustrations from './components/Illustration';
import Icons from './components/Icons';

const { ACCESS_TOKEN, SPACE_ID } = API.default;

export default class Shape extends Component {
  static propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    theme: PropTypes.number
  };

  render() {
    const {
      category,
      name,
      primaryColor,
      size,
      secondaryColor,
      backgroundColor,
      borderRadius,
      theme
    } = this.props;

    return (
      <div>
        {this.props.type.toLowerCase() === 'illustration' ||
        this.props.type.toLowerCase() === 'illustrations' ? (
          <Illustrations
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            size={size}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : (
          ''
        )}
        {this.props.type.toLowerCase() === 'icon' || this.props.type.toLowerCase() === 'icons' ? (
          <Icons
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            size={size}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

Shape.defaultProps = {
  size: 50,
  primaryColor: '#000',
  backgroundColor: 'none',
  borderRadius: 0
};
