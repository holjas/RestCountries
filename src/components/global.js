import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 

@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

body {
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear,
  }
  h1,
  h2,
  h3,
  h4,
  h5, p {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }
  .header ,
input[type="search"],
select,
 .card-body,
 .btn-outline-dark,
 .btn-outline-secondary {
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};
 }

 `;
