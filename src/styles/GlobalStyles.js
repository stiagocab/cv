import {css} from "@emotion/core";

const GlobalStyles = css`
   body {
      font-family: "Ubuntu", sans-serif;
      background-color: #000000;
      color: white;
   }

   button {
      cursor: pointer;
      outline: none;
      border: none;
   }

   div,
   section,
   article {
      box-sizing: border-box;
   }
`;

export default GlobalStyles;
