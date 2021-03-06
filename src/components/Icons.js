import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";

const query = `
{
  typeCollection(limit: 15) {
    items {
      type
      iconsCollection(limit: 700) {
        items {
          ... on Icon {
            name
            d1
            d2
            d3
            color1
            color2
            color3
            
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
        method: "POST",
        headers: {
          "content-type": "application/json",
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
    let is404 = false;
    data.filter(function(icon) {
      if (icon.type.toLowerCase() === category.toLowerCase()) {
        // else - the category does not exist
        icon.iconsCollection.items.filter(function(item) {
          try {
            if (item.name.toLowerCase() === name.toLowerCase()) {
              // else - there is no icon by that name in that category
              iconData = item;
            }
          } catch (error) {}
        });
      }
    });

    const themeOne = {
      primaryColor: "#FF5E5E",
      secondaryColor: "#1B5C6A"
    };

    const themeTwo = {
      primaryColor: "#FCAACF",
      secondaryColor: "#2249B3"
    };

    const themeThree = {
      primaryColor: "#193170",
      secondaryColor: "#2357DD"
    };

    const themeFour = {
      primaryColor: "#F8B500",
      secondaryColor: "#5E227F"
    };
    const themeFive = {
      primaryColor: "#FFB6B6",
      secondaryColor: "#139DB8"
    };

    const themeSix = {
      primaryColor: "#FFD06F",
      secondaryColor: "#28323F"
    };

    const themeSeven = {
      primaryColor: "#07038C",
      secondaryColor: "#F20505"
    };

    const defaultThemes = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor
    };

    const defaultColors = {
      // primaryColor: '#303131',
      // secondaryColor: '#4A90E2'

      primaryColor: "#f7f5f6",
      secondaryColor: "black"
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
    } else if (this.props.primaryColor || this.props.secondaryColor) {
      selectedTheme = defaultThemes;
    } else {
      selectedTheme = defaultColors;
    }

    return (
      <div
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "none",
          borderRadius: borderRadius ? borderRadius : 0
        }}
      >
        {iconData === {} ? (
          <svg
            className="illustration"
            width="1152"
            height="700"
            viewBox="0 0 1152 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M683.5 247.5L662.732 254.267L639 261.776V262V277.895V278L753.5 331L753.696 330.919L753.871 331L848.195 292.079L859.695 296.413L927.5 322L927.534 321.984L927.578 322L963.798 304.597L964 304.5V292.079V292L908.803 270.617L916 267.756V267.5V253L879.014 237.921L878.616 238.046L878.5 238L848 247.5L826.44 239.415L764.144 216L764.067 216.025L764 216L753.706 219.431L724.92 228.895V241L789.436 267.524L753.569 280.974L683.828 247.592L683.746 247.618L683.5 247.5ZM198.732 447.267L219.5 440.5L219.746 440.618L219.828 440.592L289.569 473.974L325.436 460.524L260.92 434V421.895L289.706 412.431L300 409L300.067 409.025L300.144 409L362.432 432.412L384 440.5L414.5 431L414.616 431.046L415.014 430.921L452 446V460.5V460.756L444.803 463.617L500 485V485.079V497.5L499.791 497.6L463.578 515L463.534 514.984L463.5 515L395.7 489.415L384.195 485.079L289.871 524L289.696 523.919L289.5 524L175 471V470.895V455V454.776L198.732 447.267ZM564.089 307L758 373.712V390L564.089 453.5L357 384V368.288L564.089 307Z"
              fill=""
            />
            <path
              opacity="0.2"
              d="M175 455L219.5 440.5L289.5 474L325.5 460.5L261 434V422L300 409L384 440.5L414.5 431L452 446V460.5L444.5 463.5L500 485V497.5L463.5 515L384 485L289.5 524L175 471V455Z"
              fill="#DAE4FA"
            />
            <path
              opacity="0.2"
              d="M219.828 440.592L175 454.776L289.871 507L384.195 470.895L463.578 500.553L500 485.079L428.089 457.355L452 446L415.014 430.921L384.195 440.592L300.144 409L260.92 421.895L342.17 454.776L289.871 474.118L219.828 440.592Z"
              fill="#EE7E79"
            />
            <path
              opacity="0.2"
              d="M639 262L683.5 247.5L753.5 281L789.5 267.5L725 241V229L764 216L848 247.5L878.5 238L916 253V267.5L908.5 270.5L964 292V304.5L927.5 322L848 292L753.5 331L639 278V262Z"
              fill="#DAE4FA"
            />
            <path
              opacity="0.2"
              d="M683.828 247.592L639 261.776L753.871 314L848.195 277.895L927.578 307.553L964 292.079L892.089 264.355L916 253L879.014 237.921L848.195 247.592L764.144 216L724.92 228.895L806.17 261.776L753.871 281.118L683.828 247.592Z"
              fill="#EE7E79"
            />
            <path
              opacity="0.2"
              d="M357 368.288L564.089 435L758 373.712V390L564.089 453.5L357 384V368.288Z"
              fill="#DAE4FA"
            />
            <path
              d="M564.089 435L357 368.288L564.089 307L758 373.712L564.089 435Z"
              fill="url(#paint0_linear)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M525.708 116.279L538.123 116.142L611 491.288L597.014 486.711L580.179 397.942L496.564 407.326L513.578 507L501.163 503.994L433 113.137L445.415 113L457.93 180.122L539.118 183.202L525.708 116.279ZM540.799 195.524L459.641 192.44L476.406 287.644L558.822 282.919L540.799 195.524ZM494.853 395.008L478.117 299.962L560.504 295.242L578.497 385.62L494.853 395.008Z"
              fill="#DAE4FA"
            />
            <path
              d="M599.339 310.765C597.708 311.172 583.201 309.915 579.21 314.332C572.585 308.726 561.5 267 560 264.5L556.5 258.5C554.611 257.137 551 257.5 549.5 254.5C549.037 253.574 551.86 254.321 551 252.925C549.453 250.411 549.356 247.06 548.379 246.3C546.085 244.516 544.811 239.93 544.811 238.656C544.811 237.382 545.464 236.627 548.888 238.656C552 240.5 556.5 238.656 561 240.5C567.147 243.018 565.195 249.867 566.724 252.925C568.253 255.982 601.377 310.255 599.339 310.765Z"
              fill="#EDC7C5"
            />
            <path
              d="M534.11 370.388C532.275 368.757 538.441 353.231 541.754 345.672C535.554 344.398 521.064 341.85 512.707 341.85C502.26 341.85 490.029 330.129 490.029 328.855C490.029 327.581 488.501 320.447 487.736 317.899C486.972 315.351 488.501 307.452 483.914 308.217C479.328 308.981 482.385 320.957 480.856 321.976C479.328 322.995 473.467 319.937 469.9 320.957C466.333 321.976 467.607 323.759 467.097 325.288C464.549 327.072 467.862 330.129 465.823 331.658C464.193 332.881 464.634 335.056 465.059 335.99C464.634 337.009 464.04 339.608 465.059 341.85C466.333 344.653 470.664 342.36 473.467 344.908C476.27 347.456 481.621 346.182 485.443 348.73C489.01 355.355 536.403 372.426 534.11 370.388Z"
              fill="#EDC7C5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M572.013 249.639C573.735 246.227 571.129 242.115 570.22 241.428L532.468 250.747C532.161 251.069 531.983 251.454 531.906 251.878L509.429 256.474C509.426 257.423 509.645 259.665 510.552 261.036L533.131 256.106L533.131 256.106C533.476 256.685 533.84 257.2 534.152 257.591L572.013 249.639ZM496.208 257.337C496.48 255.591 496.547 251.823 494.637 250.722L493.512 246.729L500.925 245.047L501.821 249.153C501.208 250.594 500.664 253.935 503.392 255.768L503.392 255.768L503.392 255.768C504.664 256.958 507.946 256.734 509.429 256.474C509.425 257.424 509.645 259.665 510.551 261.036C508.088 261.574 505.872 263.07 505.072 263.751L505.072 263.751C505.325 269.312 511.535 272.397 514.609 273.244L513.691 274.836C499.026 271.865 495.925 261.932 496.207 257.337L496.208 257.337ZM637.744 290.134C641.606 293.235 644.69 295.494 645.457 295.494C647.75 295.494 648.005 294.475 646.731 292.691C646.038 291.721 646.477 291.354 646.98 290.933C647.401 290.581 647.867 290.192 647.75 289.379C647.496 287.595 647.496 287.086 648.77 285.302C650.044 283.519 657.942 268.231 646.731 256.255C635.52 244.279 622.27 243.515 613.862 248.611C608.68 251.752 606.885 253.537 605.972 254.446C605.404 255.011 605.178 255.236 604.689 255.236C603.67 255.236 602.226 256.255 601.632 256.765C598.744 256 592.968 254.828 592.968 256.255C595.026 258.055 598.498 260.946 601.323 262.946C599.677 264.655 598.78 266.769 598.029 268.539C597.478 269.838 597.006 270.952 596.373 271.585C595.861 272.097 593.43 273.706 591.462 275.008L591.462 275.008C590.332 275.756 589.356 276.402 588.984 276.681C587.965 277.445 588.474 278.464 589.239 278.974C589.92 279.428 589.792 279.68 589.214 280.812C589.144 280.95 589.067 281.101 588.984 281.267C588.372 282.49 588.729 284.155 588.984 284.834C587.252 284.834 587.359 286.122 587.431 286.978C587.443 287.13 587.455 287.267 587.455 287.382C587.455 287.709 586.99 288.222 586.338 288.94L586.338 288.941L586.337 288.941C585.463 289.904 584.254 291.237 583.378 292.988C582.553 294.639 585.368 296.81 588.614 299.06L588.658 299.529C588.952 302.652 589.332 306.678 588.905 308.218C585.011 309.335 581.468 310.411 578.7 311.287C578.438 311.37 578.183 311.451 577.935 311.53C577.85 311.53 577.477 312.142 576.661 314.588C576.283 315.495 575.95 317.187 575.562 319.159L575.562 319.159C574.642 323.832 573.413 330.075 570.546 331.15C569.115 331.686 567.528 332.913 565.574 334.423C561.961 337.215 557.095 340.976 549.652 343.126C543.392 344.934 541.461 344.008 539.796 343.209C538.411 342.545 537.209 341.969 533.855 343.126C527.943 345.164 526.296 362.66 526.211 371.154C526.427 371.256 526.641 371.361 526.861 371.469C528.466 372.257 530.413 373.212 536 374.5C544.354 376.427 562.222 369.115 571.31 364.784C570.036 374.211 579.719 411.157 582.012 416.763C583.081 419.376 583.818 424.036 584.48 428.5L663.731 403.5C663.549 399.589 663.368 395.894 663.214 392.744L663.214 392.738C662.964 387.611 662.784 383.932 662.784 383.129C662.784 381.034 657.89 365.072 653.648 351.238L653.648 351.237C651.184 343.203 648.941 335.888 648.005 332.424C645.808 324.295 636.413 314.651 631.906 310.024C631.186 309.285 630.59 308.674 630.169 308.218C629.153 307.117 629.122 305.96 629.094 304.915C629.069 303.996 629.046 303.163 628.357 302.532C629.083 300.635 629.867 298.229 630.007 296.555C630.158 294.743 632.725 293.2 635.375 291.606C636.179 291.123 636.99 290.635 637.744 290.134Z"
              fill=""
            />
            <path
              d="M496.208 257.336L503.392 255.768C500.664 253.934 501.208 250.594 501.821 249.153L500.925 245.047L493.512 246.729L494.637 250.721C496.547 251.822 496.48 255.59 496.208 257.336Z"
              fill="#4B5361"
            />
            <path
              d="M505.072 263.75L503.393 255.767L496.208 257.336C495.925 261.931 499.026 271.864 513.692 274.835L514.609 273.243C511.536 272.396 505.325 269.312 505.072 263.75Z"
              fill="#DAE4FA"
            />
            <path
              d="M510.551 261.036C509.645 259.665 509.425 257.423 509.429 256.473C507.946 256.734 504.664 256.957 503.392 255.767L505.072 263.75C505.872 263.069 508.088 261.573 510.551 261.036Z"
              fill="#CDD6E6"
            />
            <path
              d="M509.429 256.473L531.906 251.878C531.673 253.161 532.354 254.798 533.132 256.105L510.552 261.036C509.645 259.665 509.425 257.423 509.429 256.473Z"
              fill="#4B5361"
            />
            <path
              d="M572.013 249.639C573.734 246.227 571.129 242.115 570.22 241.428L532.468 250.747C532.16 251.069 531.983 251.454 531.906 251.878C531.672 253.161 532.353 254.798 533.131 256.105C533.476 256.685 533.84 257.2 534.152 257.59L572.013 249.639Z"
              fill="#EE7E79"
            />
            <path
              d="M634.084 259.608C619.306 251.455 604.018 261.137 603.253 261.392C598.667 264.195 598.157 269.8 596.374 271.584C595.568 272.39 590.004 275.916 588.984 276.68C587.965 277.444 588.475 278.464 589.239 278.973C590.004 279.483 589.749 279.738 588.984 281.266C588.373 282.489 588.73 284.154 588.984 284.834C586.946 284.834 587.456 286.617 587.456 287.382C587.456 288.146 584.908 289.93 583.379 292.987C581.85 296.045 592.806 300.886 595.864 304.708C598.31 307.766 617.947 305.982 627.459 304.708C628.224 303.009 629.804 299 630.007 296.554C630.262 293.497 637.397 291.204 640.199 288.146C643.002 285.088 648.863 267.762 634.084 259.608Z"
              fill="#EDC7C5"
            />
            <path
              opacity="0.2"
              d="M620.997 301.338C632.972 301.083 627.112 304.905 630.17 308.217C633.227 311.53 645.458 322.995 648.006 332.423C650.554 341.851 662.784 379.816 662.784 383.128C662.784 386.441 665.842 438.675 664.313 439.694C662.784 440.713 588.637 441.987 586.853 439.694C585.07 437.401 584.305 422.368 582.012 416.762C579.719 411.156 570.037 374.21 571.311 364.783C562.223 369.114 544.354 376.426 536 374.5C529.645 373.034 528 372 526.211 371.153C526.296 362.659 527.944 345.163 533.855 343.125C541.244 340.577 538.187 346.437 549.653 343.125C561.119 339.812 566.469 332.678 570.546 331.149C574.623 329.62 575.387 317.645 576.661 314.587C577.477 312.141 577.851 311.53 577.935 311.53C578.183 311.45 578.438 311.369 578.7 311.286C581.469 310.41 585.012 309.334 588.905 308.217C589.756 305.148 587.405 292.212 588.905 296.212C590.105 299.412 606.221 299.429 614.554 302.037C617.047 301.628 619.247 301.375 620.997 301.338Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M581.757 359.432C576.865 361.878 573.039 363.726 571 365C570 369 575.897 409.373 579.719 415.998C583.541 422.622 584.05 434.598 584.305 435.872C584.56 437.146 590.421 436.382 592.459 436.382C603.161 436.891 661.255 422.368 664.058 415.998C666.861 409.628 665.077 383.383 664.058 378.797C663.039 374.21 652.337 336.245 649.789 330.385C647.241 324.524 633 302.999 627 301.999C619.982 300.83 617 300.999 610.5 300.999C622.5 305.499 623.545 314.077 632.972 318.154C651.063 334.207 642.145 351.788 636.285 360.961C630.424 370.134 615.901 378.032 600.103 375.484C587.465 373.446 582.607 363.934 581.757 359.432Z"
              fill="#8A6564"
            />
            <path
              d="M605.454 265.172C603.619 265.172 596.366 259.227 592.969 256.254C592.969 254.827 598.744 255.999 601.632 256.764C602.227 256.254 603.67 255.235 604.69 255.235C605.964 255.235 605.454 253.706 613.862 248.61C622.271 243.514 635.52 244.278 646.732 256.254C657.943 268.23 650.044 283.518 648.77 285.301C647.496 287.085 647.496 287.595 647.751 289.378C648.006 291.162 645.458 290.907 646.732 292.691C648.006 294.474 647.751 295.493 645.458 295.493C643.623 295.493 628.556 282.583 621.252 276.129C615.391 260.076 607.747 265.172 605.454 265.172Z"
              fill="#FFCB56"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="558"
                y1="297"
                x2="557.5"
                y2="435"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F4F8F6" />
                <stop offset="1" stopColor="#4D4D4D" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="595.317"
                y1="295.452"
                x2="595.317"
                y2="440.979"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DAE4FA" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <div>
            {iconData.d1 && iconData.d2 && iconData.d3 ? (
              <svg width={size} height={size} viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d1 ? iconData.d1 : ""}
                  fill={selectedTheme.primaryColor}
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d2 ? iconData.d2 : ""}
                  fill={selectedTheme.secondaryColor}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d3 ? iconData.d3 : ""}
                  fill={selectedTheme.secondaryColor}
                />
              </svg>
            ) : (
              ""
            )}
            {iconData.d1 && iconData.d2 && iconData.d3 === null ? (
              <svg width={size} height={size} viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d1 ? iconData.d1 : ""}
                  fill={selectedTheme.secondaryColor}
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d2 ? iconData.d2 : ""}
                  fill={selectedTheme.primaryColor}
                />
              </svg>
            ) : (
              ""
            )}
            {iconData.d1 && iconData.d2 === null && iconData.d3 === null ? (
              <svg width={size} height={size} viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  fill={backgroundColor}
                  rx={borderRadius}
                  ry={borderRadius}
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={iconData.d1 ? iconData.d1 : ""}
                  fill={selectedTheme.primaryColor}
                />
              </svg>
            ) : (
              ""
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
  category: "simple",
  name: "lock",
  primaryColor: "#000",
  secondaryColor: "#fff",
  backgroundColor: "none",
  borderRadius: 0
};
