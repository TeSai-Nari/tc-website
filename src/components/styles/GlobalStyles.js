import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1.33em;
  }

  p,
  a,
  button {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 171%;
    color: #D3D3D4;
  }

  label {
    font-family: 'Poppins', sans-serif;
    color: white;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
  }

  h2 {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.2125rem;
    line-height: 1.2
  }

  h3{
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 150%;
  }

  h4 {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  h5 {
    font-family:'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2.25rem;
  }

  @media(min-width: 1024px) {
    h1 {
      font-size: 3.75rem;
    }
    h2 {
      font-size: 3.75rem;
    }
    h3 {
      font-size: 2.25rem;
    }
    p{
      font-size: 1.125rem;
    }
  }

  .body-default {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .body-default-bold {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .body-small {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.313rem;
  }

  .body-big {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.688rem;
  }

  .title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  .body-semibold {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2rem;
  }

  .font-primary {
    font-family: 'Poppins', sans-serif;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-right {
    text-align: right;
  }

  input {
    background-color: transparent;
    border: 1px solid #ced4da;
    border-radius: 16px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;

    height: 54px;
    color: white; 
  }
`
