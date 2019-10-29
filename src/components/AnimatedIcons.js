import React from 'react';
import Lottie from 'react-lottie';

const query = `{
  animatedIconCollection {
    total
    items {
      name
      d
      d2
      code1
      code2
      code3
      code4
      code5
      backgroundCode1
      backgroundCode2
      backgroundCode3
    }
  }
}`;

class AnimatedIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconData: []
    };
  }

  componentDidMount() {
    const {
      accessToken,
      spaceId,
      name,
      category,
      theme,
      primaryColor,
      secondaryColor
    } = this.props;
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
          iconData: data.animatedIconCollection.items ? data.animatedIconCollection.items : []
        });
      })
      .catch(error => {
        // error page
        console.log(error);
      });
  }

  render() {
    const {
      accessToken,
      spaceId,
      name,
      category,
      theme,
      primaryColor,
      secondaryColor
    } = this.props;
    const { iconData } = this.state;

    let selected = '';

    iconData.map(function(item) {
      try {
        if (name.toLowerCase() === item.name.toLowerCase()) {
          selected = item;
        }
      } catch (error) {}
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
    const testString = selected.code1 + '[1,1,1,1]' + selected.code2;
    console.log(testString);
    // selected.code2 +
    // selected.code3 +
    // '[0,0,0,0]' +
    // selected.code4 +
    // '[0,0,0,0]' +
    // selected.code5 +
    // '[0,0,0,0]';

    return (
      <div>
        {/* <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: JSON.parse(testString),
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={900}
          width={900}
        /> */}
      </div>
    );
  }
}

export default AnimatedIcons;
