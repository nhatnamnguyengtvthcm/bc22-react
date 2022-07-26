import React from "react";
import { Button } from "./styles";
// import "./style.css"
// import styles from "./style.module.css";
import styles from "./style.module.scss";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  red: "#f000",
  green: "#f53",
  white: "#fff",
  black: "#000",
};
const GlobalStyle = createGlobalStyle`
  body{
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`

const DemoStyle = () => {
  return (
    // <div className={styles.box}>
    //     <h1 className='title'>Cybersoft</h1>
    //     <h1 className={styles.title}>Cybersoft</h1>
    //     <h1 >Hello Cybersoft</h1>

    // </div>
    <div>
      <ThemeProvider theme={theme}>
        <Button>Normal</Button>
        <Button disabled>Disable</Button>
        <Button variant="primary">Disable</Button>
        <Button variant="secondary">Disable</Button>
        <GlobalStyle/>
      </ThemeProvider>
     
    </div>
  );
};
export default DemoStyle;
