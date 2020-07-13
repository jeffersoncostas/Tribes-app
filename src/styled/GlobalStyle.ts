import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #E57728;
    --primary-color-200: #f1883d;
    --secondary-color: #81C565;
    --main-bg-color : #303134;
    --main-bg-color-darker : #191A1D;
    --backdrop-color: rgba(0, 0, 0, 0.35);
    --backdrop-color-darker: rgba(0, 0, 0, 0.65);

    --color-white: #FFFF;
    --color-white-transparent rgba(255, 255, 255, 0.4);
    --separator-color: #47484C;

    --font-size-title: 19px;
    --font-size-title-big: 26px;
    --font-size-title-medium: 16px;

    --font-size-medium: 18px;
    --font-size-regular: 14px;
    --font-size-small: 12px;

    --z-index-header: 5;

    --z-index-backdrop: 10;
    --z-index-sidebar: 15;

    --header-height: 70px;
  }
  html,body,#root{
    height: 100%;
    width: 100%;
  }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Montserrat";
        outline: none;
    }


`;

export const customStyles = (props: { customStyles?: string }) =>
  props.customStyles && props.customStyles;

export default GlobalStyle;
