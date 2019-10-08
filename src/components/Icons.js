import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const query = `
{
  typeCollection {
    total
    items {
      type
      iconsCollection {
        total
        items{
            ... on Icon {
              name
              url
              d1
              d2
              d3
              color1
              color2
              color3
              opacity
              tags
            }
        }
      }
    }
  }
}
`;

class Icons extends React.Component {
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
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${this.props.spaceId}/environments/master`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${this.props.accessToken}`
        },
        body: JSON.stringify({
          query
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        const { data } = response;

        this.setState({
          data: data ? response.data.typeCollection.items : []
        });
      })
      .catch(error => {
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
      borderRadius,
      theme
    } = this.props;

    let iconData = {};

    data.filter(function(icon) {
      if (icon.type.toLowerCase() === category) {
        // else - the category does not exist
        icon.iconsCollection.items.filter(function(item) {
          const iconName = item.name.toLowerCase();
          if (iconName === name) {
            // else - there is no icon by that name in that category

            iconData = item;
          }
        });
      }
    });

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
        {data === [] || iconData === {} ? (
          <Loading />
        ) : (
          <div>
            {iconData.d1 && iconData.d2 && iconData.d3 ? (
              <svg width={size} height={size} viewBox='0 0 24 24'>
                <rect
                  width='24'
                  height='24'
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d1 ? iconData.d1 : ''}
                  fill={selectedTheme.secondaryColor}
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d2 ? iconData.d2 : ''}
                  fill={selectedTheme.primaryColor}
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d3 ? iconData.d3 : ''}
                  fill={selectedTheme.primaryColor}
                />
              </svg>
            ) : (
              ''
            )}
            {iconData.d1 && iconData.d2 && iconData.d3 === null ? (
              <svg width={size} height={size} viewBox='0 0 24 24'>
                <rect
                  width='24'
                  height='24'
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d1 ? iconData.d1 : ''}
                  fill={selectedTheme.secondaryColor}
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d2 ? iconData.d2 : ''}
                  fill={selectedTheme.primaryColor}
                />
              </svg>
            ) : (
              ''
            )}
            {iconData.d1 && iconData.d2 === null && iconData.d3 === null ? (
              <svg width={size} height={size} viewBox='0 0 24 24'>
                <rect
                  width='24'
                  height='24'
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={iconData.d1 ? iconData.d1 : ''}
                  fill={selectedTheme.primaryColor}
                />
              </svg>
            ) : (
              ''
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Icons;

Icons.defaultProps = {
  size: 50,
  primaryColor: '#000',
  backgroundColor: 'none',
  borderRadius: 0
};
