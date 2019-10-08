import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  #loader {
    /* Uncomment this to make it run! */
    /*
     animation: loader 5s linear infinite; 
  */

    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }
  @keyframes loader {
    0% {
      left: -100px;
    }
    100% {
      left: 110%;
    }
  }
  #box {
    width: 50px;
    height: 50px;
    background: #aa24fe;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  #shadow {
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }
  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <div id='loader'>
        <div id='shadow'></div>
        <div id='box'></div>
      </div>
    </Container>
  );
}

export default Loading;
