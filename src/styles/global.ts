import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  
}

html, body {
min-height: 100%;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
}

body {
    /* background-color: ${(props) => props.theme["gray-800"]}; */
    background: rgb(247, 156, 90);
  background: linear-gradient(
    50deg,
    rgba(247, 156, 90, 1) 0%,
    rgba(216, 90, 247, 1) 50%,
    rgba(107, 157, 255, 1) 100%
  );
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif; 
}

button {
    font: 700 1rem Roboto, sans-serif;
    letter-spacing: .05rem;
    
    cursor: pointer;
}
`;
