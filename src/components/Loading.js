import React from 'react';
import styled from '@emotion/styled';

// NOTE
/*
Loader found at: https://codepen.io/asmaharjan/pen/EuaIF
*/

const Container = styled.div`
  .container {
    width: 200px;
    height: 100px;
    padding-top: 100px;
    margin: 0 auto;
  }

  .ball {
    width: 90px;
    height: 10px;
    margin: 10px auto;
    border-radius: 50px;
  }
  .ball:nth-of-type(1) {
    background: #d33ca3;
    -webkit-animation: right 1s infinite ease-in-out;
    -moz-animation: right 1s infinite ease-in-out;
    animation: right 1s infinite ease-in-out;
  }

  .ball:nth-of-type(2) {
    background: #39d09a;
    -webkit-animation: left 1.1s infinite ease-in-out;
    -moz-animation: left 1.1s infinite ease-in-out;
    animation: left 1.1s infinite ease-in-out;
  }

  .ball:nth-of-type(3) {
    background: #2b6ae8;
    -webkit-animation: right 1.05s infinite ease-in-out;
    -moz-animation: right 1.05s infinite ease-in-out;
    animation: right 1.05s infinite ease-in-out;
  }

  .ball:nth-of-type(4) {
    background: #824df3;
    -webkit-animation: left 1.15s infinite ease-in-out;
    -moz-animation: left 1.15s infinite ease-in-out;
    animation: left 1.15s infinite ease-in-out;
  }

  .ball:nth-of-type(5) {
    background: #db2f59;
    -webkit-animation: right 1.1s infinite ease-in-out;
    -moz-animation: right 1.1s infinite ease-in-out;
    animation: right 1.1s infinite ease-in-out;
  }

  .ball:nth-of-type(6) {
    background: #fc7161;
    -webkit-animation: left 1.05s infinite ease-in-out;
    -moz-animation: left 1.05s infinite ease-in-out;
    animation: left 1.05s infinite ease-in-out;
  }

  .ball:nth-of-type(7) {
    background: #ffbc4b;
    -webkit-animation: right 1s infinite ease-in-out;
    -moz-animation: right 1s infinite ease-in-out;
    animation: right 1s infinite ease-in-out;
  }

  @-webkit-keyframes right {
    0% {
      -webkit-transform: translate(-15px);
    }
    50% {
      -webkit-transform: translate(15px);
    }
    100% {
      -webkit-transform: translate(-15px);
    }
  }

  @-webkit-keyframes left {
    0% {
      -webkit-transform: translate(15px);
    }
    50% {
      -webkit-transform: translate(-15px);
    }
    100% {
      -webkit-transform: translate(15px);
    }
  }

  @-moz-keyframes right {
    0% {
      -moz-transform: translate(-15px);
    }
    50% {
      -moz-transform: translate(15px);
    }
    100% {
      -moz-transform: translate(-15px);
    }
  }

  @-moz-keyframes left {
    0% {
      -moz-transform: translate(15px);
    }
    50% {
      -moz-transform: translate(-15px);
    }
    100% {
      -moz-transform: translate(15px);
    }
  }

  @keyframes right {
    0% {
      transform: translate(-15px);
    }
    50% {
      transform: translate(15px);
    }
    100% {
      transform: translate(-15px);
    }
  }

  @keyframes left {
    0% {
      transform: translate(15px);
    }
    50% {
      transform: translate(-15px);
    }
    100% {
      transform: translate(15px);
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <div className='container'>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
      </div>
    </Container>
  );
};

export default Loading;
