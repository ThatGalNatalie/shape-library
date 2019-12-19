// import React from 'react';
// import Lottie from 'react-lottie';
// import Loading from './Loading';

// const query = `{
//   animatedIconCollection {
//     total
//     items {
//       name
//       d
//       d2
//       code1
//       code2
//       code3
//       code4
//       code5
//       backgroundCode1
//       backgroundCode2
//       backgroundCode3
//     }
//   }
// }`;

// class AnimatedIcons extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       iconData: []
//     };
//   }

//   componentDidMount() {
//     const {
//       accessToken,
//       spaceId,
//       name,
//       category,
//       theme,
//       primaryColor,
//       secondaryColor
//     } = this.props;
//     fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         authorization: `Bearer ${accessToken}`
//       },
//       body: JSON.stringify({
//         query
//       })
//     })
//       .then(res => res.json())
//       .then(response => {
//         const { data } = response;

//         this.setState({
//           iconData: data.animatedIconCollection.items ? data.animatedIconCollection.items : []
//         });
//       })
//       .catch(error => {
//         // error page
//         console.log(error);
//       });
//   }

//   render() {
//     const {
//       name,
//       theme,
//       primaryColor,
//       secondaryColor,
//       size,
//       backgroundColor,
//       borderRadius
//     } = this.props;
//     const { iconData } = this.state;

//     let selected = '';

//     iconData.map(function(item) {
//       try {
//         if (name.toLowerCase() === item.name.toLowerCase()) {
//           selected = item;
//         }
//       } catch (error) {}
//     });

//     function hexToRgb(hex) {
//       var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//       return result
//         ? {
//             r: parseInt(result[1], 16),
//             g: parseInt(result[2], 16),
//             b: parseInt(result[3], 16)
//           }
//         : null;
//     }

//     function shapeColorConverter(r, g, b) {
//       const arr = '[' + r / 255 + ', ' + g / 255 + ', ' + b / 255 + ']';

//       return arr;
//     }

//     const themeOne = {
//       themePrimaryColor: '[0.11,0.36,0.42,1]',
//       themeSecondaryColor: '[1,0.37,0.37,1]'
//     };

//     const themeTwo = {
//       themePrimaryColor: '[0.13,0.29,0.7,1]',
//       themeSecondaryColor: '[0.98,0.66,0.81,1]'
//     };

//     const themeThree = {
//       themePrimaryColor: '[0.14,0.34,0.86,1]',
//       themeSecondaryColor: '[0.1,0.2,0.44,1]'
//     };

//     const themeFour = {
//       themePrimaryColor: '[47,34,127, 0.8]',
//       themeSecondaryColor: '[248,181,0, 0.8]'
//     };
//     const themeFive = {
//       themePrimaryColor: '[47,34,127, 0.8]',
//       themeSecondaryColor: '[248,181,0, 0.8]'
//     };

//     const themeSix = {
//       themePrimaryColor: '[0.1,0.2,0.2,1]',
//       themeSecondaryColor: '[1,0.8,0.4,1]'
//     };

//     const themeSeven = {
//       themePrimaryColor: '[0.9,0.02,0.02,1]',
//       themeSecondaryColor: '[0.2,0.01,0.5,1]'
//     };

//     const defaultThemes = {
//       themePrimaryColor: primaryColor,
//       themeSecondaryColor: secondaryColor
//     };

//     const defaultColors = {
//       // primaryColor: '#303131',
//       // secondaryColor: '#4A90E2'

//       themePrimaryColor: '[0,0,0,0]',
//       themeSecondaryColor: '[0,0,0,0]'
//     };

//     let selectedTheme = '';

//     if (theme === 1) {
//       selectedTheme = themeOne;
//     } else if (theme === 2) {
//       selectedTheme = themeTwo;
//     } else if (theme === 3) {
//       selectedTheme = themeThree;
//     } else if (theme === 4) {
//       selectedTheme = themeFour;
//     } else if (theme === 5) {
//       selectedTheme = themeFive;
//     } else if (theme === 6) {
//       selectedTheme = themeSix;
//     } else if (theme === 7) {
//       selectedTheme = themeSeven;
//     } else {
//       selectedTheme = defaultColors;
//     }

//     if (primaryColor || secondaryColor) {
//       const primary = hexToRgb(primaryColor);
//       const second = hexToRgb(secondaryColor);

//       const one = shapeColorConverter(primary.r, primary.g, primary.b);
//       const two = shapeColorConverter(second.r, second.g, second.b);

//       defaultThemes.themePrimaryColor = one;
//       defaultThemes.themeSecondaryColor = two;
//       selectedTheme = defaultThemes;
//     }

//     let color = '';

//     if (
//       selected.code1 &&
//       selected.code2 &&
//       selected.code3 &&
//       selected.code4 &&
//       selected.code5 &&
//       selected.backgroundCode1 &&
//       selected.backgroundCode2 &&
//       selected.backgroundCode3
//     ) {
//       color =
//         selected.code1 +
//         `${selectedTheme.themeSecondaryColor}` +
//         selected.code2 +
//         `${selectedTheme.themePrimaryColor}` +
//         selected.code3 +
//         `${selectedTheme.themeSecondaryColor}` +
//         selected.code4 +
//         `${selectedTheme.themePrimaryColor}` +
//         selected.code5 +
//         '0' +
//         selected.backgroundCode1 +
//         '0' +
//         selected.backgroundCode2 +
//         `${selectedTheme.themeSecondaryColor}` +
//         selected.backgroundCode3;
//     } else if (
//       selected.code1 &&
//       selected.code2 &&
//       selected.code3 &&
//       selected.code4 &&
//       selected.code5 === null &&
//       selected.backgroundCode1 &&
//       selected.backgroundCode2 &&
//       selected.backgroundCode3
//     ) {
//       color =
//         selected.code1 +
//         '[1,1,1,1]' +
//         selected.code2 +
//         '[0.133, 0.65, 0.7, 1]' +
//         selected.code3 +
//         '[1,1,1,1]' +
//         selected.code4 +
//         '[0.133, 0.65, 0.7, 1]' +
//         selected.backgroundCode1 +
//         '0' +
//         selected.backgroundCode2 +
//         '[0.97, 0.6, 0.6,1]' +
//         selected.backgroundCode3;
//     } else if (
//       selected.code1 &&
//       selected.code2 &&
//       selected.code3 &&
//       selected.code4 === null &&
//       selected.code5 === null &&
//       selected.backgroundCode1 &&
//       selected.backgroundCode2 &&
//       selected.backgroundCode3
//     ) {
//       color =
//         selected.code1 +
//         '[1,1,1,1]' +
//         selected.code2 +
//         '[0.133, 0.65, 0.7, 1]' +
//         selected.code3 +
//         '[1,1,1,1]' +
//         selected.backgroundCode1 +
//         '0' +
//         selected.backgroundCode2 +
//         '[0.97, 0.6, 0.6,1]' +
//         selected.backgroundCode3;
//     } else if (
//       selected.code1 &&
//       selected.code2 &&
//       selected.code3 === null &&
//       selected.code4 === null &&
//       selected.code5 === null &&
//       selected.backgroundCode1 &&
//       selected.backgroundCode2 &&
//       selected.backgroundCode3
//     ) {
//       color =
//         selected.code1 +
//         '[1,1,1,1]' +
//         selected.code2 +
//         '[0.133, 0.65, 0.7, 1]' +
//         selected.backgroundCode1 +
//         '0' +
//         selected.backgroundCode2 +
//         '[0.97, 0.6, 0.6,1]' +
//         selected.backgroundCode3;
//     }

//     return (
//       <div
//         style={{
//           backgroundColor: `${backgroundColor ? backgroundColor : 'none'}`,
//           borderRadius: borderRadius
//         }}
//       >
//         {color !== '' ? (
//           <div>
//             <Lottie
//               options={{
//                 loop: true,
//                 autoplay: true,
//                 animationData: JSON.parse(color),
//                 rendererSettings: {
//                   preserveAspectRatio: 'xMidYMid slice'
//                 }
//               }}
//               height={size ? size : 150}
//               width={size ? size : 150}
//             />
//           </div>
//         ) : (
//           <Loading />
//         )}
//       </div>
//     );
//   }
// }

// export default AnimatedIcons;

import React from "react";
import Lottie from "react-lottie";
import Loading from "./Loading";

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
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`
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
          iconData: data.animatedIconCollection.items
            ? data.animatedIconCollection.items
            : []
        });
      })
      .catch(error => {
        // error page
        console.log(error);
      });
  }

  render() {
    const {
      name,
      theme,
      primaryColor,
      secondaryColor,
      size,
      backgroundColor,
      borderRadius
    } = this.props;
    const { iconData } = this.state;

    let selected = "";

    iconData.map(function(item) {
      try {
        if (name.toLowerCase() === item.name.toLowerCase()) {
          selected = item;
        }
      } catch (error) {}
    });

    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null;
    }

    function shapeColorConverter(r, g, b) {
      const arr = "[" + r / 255 + ", " + g / 255 + ", " + b / 255 + "]";

      return arr;
    }

    const themeOne = {
      themePrimaryColor: "[0.11,0.36,0.42,1]",
      themeSecondaryColor: "[1,0.37,0.37,1]"
    };

    const themeTwo = {
      themePrimaryColor: "[0.13,0.29,0.7,1]",
      themeSecondaryColor: "[0.98,0.66,0.81,1]"
    };

    const themeThree = {
      themePrimaryColor: "[0.14,0.34,0.86,1]",
      themeSecondaryColor: "[0.1,0.2,0.44,1]"
    };

    const themeFour = {
      themePrimaryColor: "[47,34,127, 0.8]",
      themeSecondaryColor: "[248,181,0, 0.8]"
    };
    const themeFive = {
      themePrimaryColor: "[47,34,127, 0.8]",
      themeSecondaryColor: "[248,181,0, 0.8]"
    };

    const themeSix = {
      themePrimaryColor: "[0.1,0.2,0.2,1]",
      themeSecondaryColor: "[1,0.8,0.4,1]"
    };

    const themeSeven = {
      themePrimaryColor: "[0.9,0.02,0.02,1]",
      themeSecondaryColor: "[0.2,0.01,0.5,1]"
    };

    const defaultThemes = {
      themePrimaryColor: primaryColor,
      themeSecondaryColor: secondaryColor
    };

    const defaultColors = {
      // primaryColor: '#303131',
      // secondaryColor: '#4A90E2'

      themePrimaryColor: "[0,0,0,0]",
      themeSecondaryColor: "[0,0,0,0]"
    };

    let selectedTheme = "";

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
    } else {
      selectedTheme = defaultColors;
    }

    // if (primaryColor || secondaryColor) {
    //   const primary = hexToRgb(primaryColor);
    //   const second = hexToRgb(secondaryColor);

    //   const one = shapeColorConverter(primary.r, primary.g, primary.b);
    //   const two = shapeColorConverter(second.r, second.g, second.b);

    //   defaultThemes.themePrimaryColor = one;
    //   defaultThemes.themeSecondaryColor = two;
    //   selectedTheme = defaultThemes;
    // }

    let color = "";

    if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 &&
      selected.code4 &&
      selected.code5 &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      color =
        selected.code1 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.code2 +
        `${selectedTheme.themePrimaryColor}` +
        selected.code3 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.code4 +
        `${selectedTheme.themePrimaryColor}` +
        selected.code5 +
        "0" +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.backgroundCode3;
    } else if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 &&
      selected.code4 &&
      selected.code5 === null &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      color =
        selected.code1 +
        "[1,1,1,1]" +
        selected.code2 +
        "[0.133, 0.65, 0.7, 1]" +
        selected.code3 +
        "[1,1,1,1]" +
        selected.code4 +
        "[0.133, 0.65, 0.7, 1]" +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[0.97, 0.6, 0.6,1]" +
        selected.backgroundCode3;
    } else if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 &&
      selected.code4 === null &&
      selected.code5 === null &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      color =
        selected.code1 +
        "[1,1,1,1]" +
        selected.code2 +
        "[0.133, 0.65, 0.7, 1]" +
        selected.code3 +
        "[1,1,1,1]" +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[0.97, 0.6, 0.6,1]" +
        selected.backgroundCode3;
    } else if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 === null &&
      selected.code4 === null &&
      selected.code5 === null &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      color =
        selected.code1 +
        "[1,1,1,1]" +
        selected.code2 +
        "[0.133, 0.65, 0.7, 1]" +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[0.97, 0.6, 0.6,1]" +
        selected.backgroundCode3;
    }

    return (
      <div
        style={{
          backgroundColor: `${backgroundColor ? backgroundColor : "none"}`,
          borderRadius: borderRadius
        }}
      >
        {color !== "" ? (
          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: JSON.parse(color),
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
              height={size ? size : 150}
              width={size ? size : 150}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default AnimatedIcons;
