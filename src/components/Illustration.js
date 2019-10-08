import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const query = `{
  illustrationTypeCollection {
    total
    items {
      name
      illustrationsCollection {
        total
        items {
          ... on Illustration {
            name
            color1
            color2
            code
            code2
            code3
            tags
          }
        }
      }
    }
  }
}`;

const Container = styled.div`
  div > svg {
    fill: ${props => props.fill};
    width: ${props => props.width}em;
    height: ${props => props.height}em;
    background-color: ${props => props.backgroundColor};
  }

  div > svg > path {
    /* fill: ${props => props.secondaryColor}; */
  }
`;

class Illustrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { accessToken, spaceId } = this.props;
    fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query
      })
    })
      .then(res => res.json())
      .then(response => {
        const { data } = response;

        this.setState({
          data: data ? data.illustrationTypeCollection.items : []
        });
      })
      .catch(error => {
        // error page
        console.log(error);
      });
  }
  render() {
    const { data } = this.state;
    const {
      category,
      name,
      primaryColor,
      size,
      secondaryColor,
      backgroundColor,
      theme
    } = this.props;
    let illustrationData = {};

    data.filter(function(icon) {
      if (icon.name.toLowerCase() === category) {
        icon.illustrationsCollection.items.filter(function(item) {
          const iconName = item.name.toLowerCase();
          if (iconName === name) {
            illustrationData = item;
          }
        });
      }
    });
    const code = `${illustrationData.code}${illustrationData.code2}${illustrationData.code3}`;
    const style = {};

    const themeOne = {
      primaryColor: '#FF5E5E',
      secondaryColor: '#1B5C6A'
    };

    const themeTwo = {
      primaryColor: '#FCAACF',
      secondaryColor: '#2249B3'
    };

    const themeThree = {
      primaryColor: '#858585',
      secondaryColor: '#FED330'
    };

    const themeFour = {
      primaryColor: '#193170',
      secondaryColor: '#2357DD'
    };
    const themeFive = {
      primaryColor: '#F8B500',
      secondaryColor: '#5E227F'
    };

    const themeSix = {
      primaryColor: '#FFB6B6',
      secondaryColor: '#139DB8'
    };

    const themeSeven = {
      primaryColor: '#FFD06F',
      secondaryColor: '#28323F'
    };

    const themeEight = {
      primaryColor: '#07038C',
      secondaryColor: '#F20505'
    };

    const defaultThemes = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor
    };

    let selectedTheme = '';

    if (theme === 1) {
      selectedTheme = themeOne;
    } else if (theme === 2) {
      selectedTheme = themeTwo;
    } else if (theme === 3) {
      selectedTheme = themeThree;
    } else if (theme === 4) {
      selectedTheme = themeFour;
    } else if (theme === 5) {
      selectedTheme = themeFive;
    } else if (theme === 6) {
      selectedTheme = themeSix;
    } else if (theme === 7) {
      selectedTheme = themeSeven;
    } else if (theme === 8) {
      selectedTheme = themeEight;
    } else if (this.props.primaryColor || this.props.secondaryColor) {
      selectedTheme = defaultThemes;
    }

    return (
      <div>
        <Container
          fill={primaryColor}
          width={size}
          height={size}
          backgroundColor={backgroundColor}
          secondaryColor={secondaryColor}
        >
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </Container>
      </div>
    );
  }
}
export default Illustrations;

Illustrations.defaultProps = {
  size: 50,
  primaryColor: '#eee',
  backgroundColor: 'none',
  borderRadius: 0
};
