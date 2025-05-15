import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
    height: 100%;
    overflow: hidden;
  }
  
  body {
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: #333;
    line-height: 1.5;
  }
  
  button {
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes slideInLeft {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 105, 180, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 105, 180, 0);
    }
  }
`;

export default GlobalStyle;