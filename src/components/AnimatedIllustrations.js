import React from "react";
import Lottie from "react-lottie";
import Loading from "./Loading";

const query = `{
  animatedIllustrationTypeCollection {
    total
    items {
      ... on AnimatedIllustrationType {
        type
      }
      animatedIllustrationsCollection {
        total
        items {
          ... on AnimatedIllustration {
            name
            svgCode1
            svgCode2
            svgCode3
            code1
            code2
            code3
          }
        }
      }
    }
  }
}`;

// class AnimatedIllustrations extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       illustrationData: []
//     };
//   }
//   componentDidMount() {

//   }
// }

// class AnimatedIllustrations extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       illustrationData: []
//     };
//   }

//   componentDidMount() {
//     const { accessToken, spaceId } = this.props;
//     fetch(
//       `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${accessToken}`
//         },
//         body: JSON.stringify({
//           query
//         })
//       }
//     )
//       .then(res => res.json())
//       .then(response => {
//         const { data } = response;

//         this.setState({
//           illustrationData: data.animatedIllustrationTypeCollection.items
//         });
//       })
//       .catch(error => {
//         // error page
//         console.log(error);
//       });
//   }

//   render() {
//     const { category, name, theme, primaryColor, secondaryColor } = this.props;
//     const { illustrationData } = this.state;
//     let selected = "";

//     illustrationData.map(function(item) {
//       if (item.type.toLowerCase() === category.toLowerCase()) {
//         item.animatedIllustrationsCollection.items.filter(function(
//           illustration
//         ) {
//           try {
//             if (
//               illustration.name !== null &&
//               name.toLowerCase() === illustration.name.toLowerCase()
//             ) {
//               selected = illustration;
//             }
//           } catch (error) {}
//         });
//       }
//     });

//     function colourNameToHex(colour) {
//       var colours = {
//         aliceblue: "#f0f8ff",
//         antiquewhite: "#faebd7",
//         aqua: "#00ffff",
//         aquamarine: "#7fffd4",
//         azure: "#f0ffff",
//         beige: "#f5f5dc",
//         bisque: "#ffe4c4",
//         black: "#000000",
//         blanchedalmond: "#ffebcd",
//         blue: "#0000ff",
//         blueviolet: "#8a2be2",
//         brown: "#a52a2a",
//         burlywood: "#deb887",
//         cadetblue: "#5f9ea0",
//         chartreuse: "#7fff00",
//         chocolate: "#d2691e",
//         coral: "#ff7f50",
//         cornflowerblue: "#6495ed",
//         cornsilk: "#fff8dc",
//         crimson: "#dc143c",
//         cyan: "#00ffff",
//         darkblue: "#00008b",
//         darkcyan: "#008b8b",
//         darkgoldenrod: "#b8860b",
//         darkgray: "#a9a9a9",
//         darkgreen: "#006400",
//         darkkhaki: "#bdb76b",
//         darkmagenta: "#8b008b",
//         darkolivegreen: "#556b2f",
//         darkorange: "#ff8c00",
//         darkorchid: "#9932cc",
//         darkred: "#8b0000",
//         darksalmon: "#e9967a",
//         darkseagreen: "#8fbc8f",
//         darkslateblue: "#483d8b",
//         darkslategray: "#2f4f4f",
//         darkturquoise: "#00ced1",
//         darkviolet: "#9400d3",
//         deeppink: "#ff1493",
//         deepskyblue: "#00bfff",
//         dimgray: "#696969",
//         dodgerblue: "#1e90ff",
//         firebrick: "#b22222",
//         floralwhite: "#fffaf0",
//         forestgreen: "#228b22",
//         fuchsia: "#ff00ff",
//         gainsboro: "#dcdcdc",
//         ghostwhite: "#f8f8ff",
//         gold: "#ffd700",
//         goldenrod: "#daa520",
//         gray: "#808080",
//         green: "#008000",
//         greenyellow: "#adff2f",
//         honeydew: "#f0fff0",
//         hotpink: "#ff69b4",
//         "indianred ": "#cd5c5c",
//         indigo: "#4b0082",
//         ivory: "#fffff0",
//         khaki: "#f0e68c",
//         lavender: "#e6e6fa",
//         lavenderblush: "#fff0f5",
//         lawngreen: "#7cfc00",
//         lemonchiffon: "#fffacd",
//         lightblue: "#add8e6",
//         lightcoral: "#f08080",
//         lightcyan: "#e0ffff",
//         lightgoldenrodyellow: "#fafad2",
//         lightgrey: "#d3d3d3",
//         lightgreen: "#90ee90",
//         lightpink: "#ffb6c1",
//         lightsalmon: "#ffa07a",
//         lightseagreen: "#20b2aa",
//         lightskyblue: "#87cefa",
//         lightslategray: "#778899",
//         lightsteelblue: "#b0c4de",
//         lightyellow: "#ffffe0",
//         lime: "#00ff00",
//         limegreen: "#32cd32",
//         linen: "#faf0e6",
//         magenta: "#ff00ff",
//         maroon: "#800000",
//         mediumaquamarine: "#66cdaa",
//         mediumblue: "#0000cd",
//         mediumorchid: "#ba55d3",
//         mediumpurple: "#9370d8",
//         mediumseagreen: "#3cb371",
//         mediumslateblue: "#7b68ee",
//         mediumspringgreen: "#00fa9a",
//         mediumturquoise: "#48d1cc",
//         mediumvioletred: "#c71585",
//         midnightblue: "#191970",
//         mintcream: "#f5fffa",
//         mistyrose: "#ffe4e1",
//         moccasin: "#ffe4b5",
//         navajowhite: "#ffdead",
//         navy: "#000080",
//         oldlace: "#fdf5e6",
//         olive: "#808000",
//         olivedrab: "#6b8e23",
//         orange: "#ffa500",
//         orangered: "#ff4500",
//         orchid: "#da70d6",
//         palegoldenrod: "#eee8aa",
//         palegreen: "#98fb98",
//         paleturquoise: "#afeeee",
//         palevioletred: "#d87093",
//         papayawhip: "#ffefd5",
//         peachpuff: "#ffdab9",
//         peru: "#cd853f",
//         pink: "#ffc0cb",
//         plum: "#dda0dd",
//         powderblue: "#b0e0e6",
//         purple: "#800080",
//         rebeccapurple: "#663399",
//         red: "#ff0000",
//         rosybrown: "#bc8f8f",
//         royalblue: "#4169e1",
//         saddlebrown: "#8b4513",
//         salmon: "#fa8072",
//         sandybrown: "#f4a460",
//         seagreen: "#2e8b57",
//         seashell: "#fff5ee",
//         sienna: "#a0522d",
//         silver: "#c0c0c0",
//         skyblue: "#87ceeb",
//         slateblue: "#6a5acd",
//         slategray: "#708090",
//         snow: "#fffafa",
//         springgreen: "#00ff7f",
//         steelblue: "#4682b4",
//         tan: "#d2b48c",
//         teal: "#008080",
//         thistle: "#d8bfd8",
//         tomato: "#ff6347",
//         turquoise: "#40e0d0",
//         violet: "#ee82ee",
//         wheat: "#f5deb3",
//         white: "#ffffff",
//         whitesmoke: "#f5f5f5",
//         yellow: "#ffff00",
//         yellowgreen: "#9acd32"
//       };

//       if (typeof colours[colour.toLowerCase()] != "undefined")
//         return colours[colour.toLowerCase()];

//       return false;
//     }

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

//     function colorChange(color) {
//       const arr =
//         "[" +
//         hexToRgb(color).r / 255 +
//         ", " +
//         hexToRgb(color).g / 255 +
//         ", " +
//         hexToRgb(color).b / 255 +
//         "]";

//       return arr;
//     }

//     const themeOne = {
//       themePrimaryColor: "[0.11,0.36,0.42,1]",
//       themeSecondaryColor: "[1,0.37,0.37,1]"
//     };

//     const themeTwo = {
//       themePrimaryColor: "[0.13,0.29,0.7,1]",
//       themeSecondaryColor: "[0.98,0.66,0.81,1]"
//     };

//     const themeThree = {
//       themePrimaryColor: "[0.14,0.34,0.86,1]",
//       themeSecondaryColor: "[0.1,0.2,0.44,1]"
//     };

//     const themeFour = {
//       themePrimaryColor: "[47,34,127, 0.8]",
//       themeSecondaryColor: "[248,181,0, 0.8]"
//     };
//     const themeFive = {
//       themePrimaryColor: "[47,34,127, 0.8]",
//       themeSecondaryColor: "[248,181,0, 0.8]"
//     };

//     const themeSix = {
//       themePrimaryColor: "[0.1,0.2,0.2,1]",
//       themeSecondaryColor: "[1,0.8,0.4,1]"
//     };

//     const themeSeven = {
//       themePrimaryColor: "[0.9,0.02,0.02,1]",
//       themeSecondaryColor: "[0.2,0.01,0.5,1]"
//     };

//     const defaultThemes = {
//       themePrimaryColor: primaryColor,
//       themeSecondaryColor: secondaryColor
//     };

//     const defaultColors = {
//       // primaryColor: '#303131',
//       // secondaryColor: '#4A90E2'

//       themePrimaryColor: "[0,0,0,0]",
//       themeSecondaryColor: "[0,0,0,0]"
//     };

//     let selectedTheme = "";

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

//     if (
//       colourNameToHex(this.props.primaryColor) !== false ||
//       colourNameToHex(this.props.secondaryColor) !== false
//     ) {
//       // a name

//       try {
//         const hex1 = colourNameToHex(this.props.primaryColor);
//         const rgb1 = hexToRgb(hex1);

//         const arr1 =
//           "[" + rgb1.r / 255 + ", " + rgb1.g / 255 + ", " + rgb1.b / 255 + "]";

//         const hex2 = colourNameToHex(this.props.secondaryColor);
//         const rgb2 = hexToRgb(hex2);

//         const arr2 =
//           "[" + rgb2.r / 255 + ", " + rgb2.g / 255 + ", " + rgb2.b / 255 + "]";

//         defaultThemes.themePrimaryColor = arr1;
//         defaultThemes.themeSecondaryColor = arr2;

//         selectedTheme = defaultThemes;
//       } catch (error) {}
//     }

//     let primaryHex = "";
//     let secondaryColorHex = "";
//     if (
//       this.props.primaryColor[0] === "#" ||
//       this.props.secondaryColor[0] === "#"
//     ) {
//       function hexToRgb(hex) {
//         // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//         var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//         hex = hex.replace(shorthandRegex, function(m, r, g, b) {
//           return r + r + g + g + b + b;
//         });

//         var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//         return result
//           ? {
//               r: parseInt(result[1], 16),
//               g: parseInt(result[2], 16),
//               b: parseInt(result[3], 16)
//             }
//           : null;
//       }

//       primaryHex = hexToRgb(this.props.primaryColor);
//       secondaryColorHex = hexToRgb(this.props.secondaryColor);

//       const arr1 =
//         "[" +
//         primaryHex.r / 255 +
//         ", " +
//         primaryHex.g / 255 +
//         ", " +
//         primaryHex.b / 255 +
//         "]";
//       const arr2 =
//         "[" +
//         secondaryColorHex.r / 255 +
//         ", " +
//         secondaryColorHex.g / 255 +
//         ", " +
//         secondaryColorHex.b / 255 +
//         "]";

//       defaultThemes.themePrimaryColor = arr1;
//       defaultThemes.themeSecondaryColor = arr2;

//       selectedTheme = defaultThemes;
//     }

//     const code = `${selected.code1}${selected.code2}${selected.code3}`;
//     let isLoading = false;

//     try {
//       if (code === "undefinedundefinedundefined") {
//         isLoading = true;
//       }
//     } catch (error) {}

//     const newFormat =
//       selected.code1 +
//       `${
//         selectedTheme.themePrimaryColor
//           ? selectedTheme.themePrimaryColor
//           : [0, 0, 0, 0]
//       }` +
//       selected.code2 +
//       `${
//         selectedTheme.themeSecondaryColor
//           ? selectedTheme.themeSecondaryColor
//           : [0, 0, 0, 0]
//       }` +
//       selected.code3;

//     return (
//       <div>
//         {isLoading === false ? (
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: JSON.parse(newFormat),
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice"
//               }
//             }}
//             height={900}
//             width={900}
//           />
//         ) : (
//           <Loading />
//         )}
//       </div>
//     );
//   }
// }

// export default AnimatedIllustrations;
