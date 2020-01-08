import React from "react";
import Lottie from "react-lottie";
var contentful = require("contentful");
import Loading from "./Loading";

/*
// FIXME 
1. primarycolor = # & secondarycolor = #
2. primarycolor = name & secondarycolor = # (vice versa)
3. remove background color
4. theme passed must not over ride
5. default colors = black and white ✅
6. misspell something => error page
*/

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
      secondaryColor,
      backgroundColor,
      borderRadius
    } = this.props;

    const allAnimatedIcons = [];
    const types = [];

    const client = contentful.createClient({
      space: space,
      accessToken: accessToken
    });

    client.getEntry("6hJEyfky1ufaHrO9QQrxBe").then(function(entry) {
      const list = entry.fields.list[0].fields.icons;
      list.map(type => types.push(type.sys.id));

      types.map(typeid => {
        client.getEntries({ "sys.id": typeid }).then(response => {
          allAnimatedIcons.push(response.items[0].fields);

          localStorage.setItem("icons", JSON.stringify(allAnimatedIcons));
        });
      });
    });
    this.setState({ iconData: JSON.parse(localStorage.getItem("icons")) });
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

    function hexToRGB(h) {
      let r = 0,
        g = 0,
        b = 0;

      // 3 digits
      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      // return "rgb(" + +r + "," + +g + "," + +b + ")";

      return {
        r: ++r,
        g: ++g,
        b: ++b
      };
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

    // if (theme === 1) {
    //   selectedTheme = themeOne;
    // } else if (theme === 2) {
    //   selectedTheme = themeTwo;
    // } else if (theme === 3) {
    //   selectedTheme = themeThree;
    // } else if (theme === 4) {
    //   selectedTheme = themeFour;
    // } else if (theme === 5) {
    //   selectedTheme = themeFive;
    // } else if (theme === 6) {
    //   selectedTheme = themeSix;
    // } else if (theme === 7) {
    //   selectedTheme = themeSeven;
    // } else {
    //   selectedTheme = defaultColors;
    // }

    // if (primaryColor || secondaryColor) {
    //   const primary = hexToRgb(primaryColor);
    //   const second = hexToRgb(secondaryColor);

    //   const one = shapeColorConverter(primary.r, primary.g, primary.b);
    //   const two = shapeColorConverter(second.r, second.g, second.b);

    //   defaultThemes.themePrimaryColor = one;
    //   defaultThemes.themeSecondaryColor = two;
    //   selectedTheme = defaultThemes;
    // }

    if (
      primaryColor[0] === "#" &&
      secondaryColor[0] === "#" &&
      theme === undefined
    ) {
      const primary = hexToRGB(primaryColor);
      const second = hexToRGB(secondaryColor);

      const one = shapeColorConverter(primary.r, primary.g, primary.b);
      const two = shapeColorConverter(second.r, second.g, second.b);

      defaultThemes.themePrimaryColor = one;
      defaultThemes.themeSecondaryColor = two;
      selectedTheme = defaultThemes;
    }

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
    } else if (
      theme === undefined &&
      primaryColor[0] !== "#" &&
      secondaryColor[0] !== "#"
    ) {
      selectedTheme = defaultColors;
    }

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
      console.log("all 5");
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
    }

    if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 &&
      selected.code4 &&
      selected.code5 === undefined &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      console.log("all 4");
      color =
        selected.code1 +
        `${selectedTheme.themePrimaryColor}` +
        selected.code2 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.code3 +
        `${selectedTheme.themePrimaryColor}` +
        selected.code4 +
        `${selectedTheme.themePrimaryColor}` +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[1,1,1]" +
        selected.backgroundCode3;
    }

    if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 &&
      selected.code4 === undefined &&
      selected.code5 === undefined &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      console.log("all 3");
      color =
        selected.code1 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.code2 +
        `${selectedTheme.themePrimaryColor}` +
        selected.code3 +
        `${selectedTheme.themePrimaryColor}` +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[1,1,1]" +
        selected.backgroundCode3;
    }

    if (
      selected.code1 &&
      selected.code2 &&
      selected.code3 === undefined &&
      selected.backgroundCode1 &&
      selected.backgroundCode2 &&
      selected.backgroundCode3
    ) {
      console.log("all 2");
      color =
        selected.code1 +
        `${selectedTheme.themeSecondaryColor}` +
        selected.code2 +
        `${selectedTheme.themePrimaryColor}` +
        selected.backgroundCode1 +
        "0" +
        selected.backgroundCode2 +
        "[1,1,1]" +
        selected.backgroundCode3;
    }

    console.log(selected);
    return (
      <div>
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
        <h1>for now</h1>
      </div>
    );
  }
}

export default AnimatedIcons;
