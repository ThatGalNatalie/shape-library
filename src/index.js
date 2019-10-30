import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../config';
import Illustrations from './components/Illustration';
import Icons from './components/Icons';
import AnimatedIllustrations from './components/AnimatedIllustrations';
import AnimatedIcons from './components/AnimatedIcons';

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
      theme,
      type
    } = this.props;

    return (
      <div>
        {/* {this.props.type.toLowerCase() === 'illustration' ||
        this.props.type.toLowerCase() === 'illustrations' ? (
          <Illustrations
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            size={size ? size : 900}
            backgroundColor={backgroundColor}
            borderRadius={!borderRadius ? 0 : borderRadius}
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
            size={size ? size : 54}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : (
          ''
        )} */}

        {type.toLowerCase() === 'animatedillustrations' ? (
          <AnimatedIllustrations
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : type.toLowerCase() === 'illustrations' ? (
          <Illustrations
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            size={size ? size : 900}
            backgroundColor={backgroundColor}
            borderRadius={!borderRadius ? 0 : borderRadius}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : type.toLowerCase() === 'icons' ? (
          <Icons
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            size={size ? size : 54}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ) : type.toLowerCase() === 'animatedicons' ? (
          <AnimatedIcons
            accessToken={ACCESS_TOKEN}
            spaceId={SPACE_ID}
            category={category}
            name={name}
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            size={size}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

Shape.defaultProps = {
  type: 'icons',
  category: 'simple',
  name: 'lock',
  primaryColor: 'black',
  secondaryColor: '#f7f5f6',
  backgroundColor: 'none',
  borderRadius: 0
};
