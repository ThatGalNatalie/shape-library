import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';

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

// FIXME  Fixes
// 2. borderRadius = {} -> breaks, is it possible to put 0 when the value is null

// 13. Update ReadME
// 14. Fix props with no value -> right now it crashes
// 15. 404 for spelling errors

class Illustrations extends React.Component {
  static propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    theme: PropTypes.number
  };

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
      theme,
      borderRadius
    } = this.props;

    let selected = '';

    data.map(function(item) {
      if (item.name.toLowerCase() === category.toLowerCase()) {
        item.illustrationsCollection.items.filter(function(illustration) {
          try {
            if (
              illustration.name !== null &&
              name.toLowerCase() === illustration.name.toLowerCase()
            ) {
              selected = illustration;
            }
          } catch (error) {}
        });
      }
    });

    const code = `${selected.code}${selected.code2}${selected.code3}`;

    const themeOne = {
      primaryColor: '#FF5E5E',
      secondaryColor: '#1B5C6A'
    };

    const themeTwo = {
      primaryColor: '#FCAACF',
      secondaryColor: '#2249B3'
    };

    const themeThree = {
      primaryColor: '#193170',
      secondaryColor: '#2357DD'
    };

    const themeFour = {
      primaryColor: '#F8B500',
      secondaryColor: '#5E227F'
    };
    const themeFive = {
      primaryColor: '#FFB6B6',
      secondaryColor: '#139DB8'
    };

    const themeSix = {
      primaryColor: '#FFD06F',
      secondaryColor: '#28323F'
    };

    const themeSeven = {
      primaryColor: '#07038C',
      secondaryColor: '#F20505'
    };

    const defaultThemes = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor
    };

    const defaultColors = {
      // primaryColor: '#303131',
      // secondaryColor: '#4A90E2'

      primaryColor: '#f7f5f6',
      secondaryColor: 'black'
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
    } else if (this.props.primaryColor || this.props.secondaryColor) {
      selectedTheme = defaultThemes;
    } else {
      selectedTheme = defaultColors;
    }

    function getSVGContents(inputString) {
      let domParser = new DOMParser();
      let svgDOM = domParser.parseFromString(inputString, 'text/xml');
      let nums = [];

      if (svgDOM !== undefined) {
        // NOTE Works on some
        // for (var i = 0; i <= svgDOM.getElementsByTagName('path').length - 1; i++) {
        //   if (svgDOM.getElementsByTagName('path')[i].getAttribute('fill') === '') {
        //     nums.push(i);
        //   } else {
        //     console.log(false);
        //   }
        // }

        for (var i = 0; i <= svgDOM.getElementsByTagName('*').length - 1; i++) {
          if (
            svgDOM.getElementsByTagName('*')[i].getAttribute('fill') === ' ' ||
            svgDOM.getElementsByTagName('*')[i].getAttribute('fill') === '' ||
            svgDOM.getElementsByTagName('*')[i].getAttribute('fill') === '  '
          ) {
            nums.push(i);
          }
        }

        try {
          if (nums.length === 2) {
            svgDOM
              .getElementsByTagName('*')
              [nums[0]].setAttribute('fill', selectedTheme.primaryColor);

            svgDOM
              .getElementsByTagName('*')
              [nums[1]].setAttribute('fill', selectedTheme.secondaryColor);
          } else if (nums.length === 1) {
            svgDOM
              .getElementsByTagName('*')
              [nums[0]].setAttribute('fill', selectedTheme.primaryColor);
          }

          return svgDOM.getElementsByTagName('svg')[0].innerHTML;
        } catch (error) {}

        // try {
        //   svgDOM
        //     .getElementsByTagName('path')
        //     [nums[0]].setAttribute('fill', selectedTheme.primaryColor);
        //   svgDOM
        //     .getElementsByTagName('path')
        //     [nums[1]].setAttribute('fill', selectedTheme.secondaryColor);

        //   return svgDOM.getElementsByTagName('svg')[0].innerHTML;
        // } catch (error) {}
      }
    }
    // ${getSVGContents(code) !== undefined ? getSVGContents(code) : ''}
    const svgString = `
      <svg class="illustration" width=${size} height=${size} viewBox="0 0 1155 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${getSVGContents(code)}
      </svg>`;

    const styles = {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius
    };

    return (
      <div>
        {getSVGContents(code) !== undefined ? (
          <div style={styles} dangerouslySetInnerHTML={{ __html: svgString }} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

Illustrations.defaultProps = {
  borderRadius: 0,
  backgroundColor: 'none',
  size: 900
};

export default Illustrations;
