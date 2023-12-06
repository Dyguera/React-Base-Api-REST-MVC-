/* eslint-disable import/no-extraneous-dependencies */
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin :0;
  padding: 0;
  outline: none;
  box-sizing: border-box
}

body{
  font-family: sans-serif;
  background-color:${colors.primaryDarkColoar};
  color: ${colors.primaryColor};

}
body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${colors.successColor}
}
body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background: ${colors.errorColor}
}
html, border-style, #root {
  height: 100%
}

button{
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border:none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color:  ${colors.primaryColor};
}

ul {
  list-style: none;
}

p{
  color:black
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
