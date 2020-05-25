import React from "react";
import "./styles/normalize.css";
import {Helmet} from "react-helmet";
import {Global} from "@emotion/core";
import HomePage from "./pages/home/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "emotion-theming";

const theme = {
   primary: "#B833F1",
   background: "#001F42",
};

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Helmet>
            <title>Santiago Cabrera - Developer</title>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
         </Helmet>
         <Global styles={GlobalStyles} />
         <HomePage />
      </ThemeProvider>
   );
}

export default App;
