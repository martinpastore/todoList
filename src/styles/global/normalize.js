import { css } from "styled-components";

export default css`
  html {
    background: ${({ theme }) => theme.colors.background};
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .App {
    max-width: 95%;
    background: #ddd;
    margin: 1vw auto;
    color: #eee;
  }

  form {
    padding: 1em;
    padding-bottom: 1em;
  }

  input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    background: #fa8072;
    color: #eee;
    padding: 10px;
    border: 0;
    height: 2.5em;
    font-size: 2em;
    border-radius: 5px;
    margin: 0.5em auto;
    cursor: pointer;
  }

  input[type="text"]:hover {
    opacity: 0.8;
  }

  ::placeholder {
    color: #fff;
    text-align: center;
  }

  .tasks {
    margin: 3em;
    padding-bottom: 2em;
  }

  .tasks ul {
    padding: 0;
    list-style-type: none;
  }
  .tasks li {
    text-decoration: none;
    margin: 0;
    background: #fa8072;
    padding: 1em;
    margin: 1em 0;
    border-radius: 0.7em;
  }

  li .icon {
    width: "40px";
    display: "inline-flex";
    align-items: "center";
    justify-content: "space-between";
    margin-right: "1rem";
    float: "right";
    transition: "all 0.3s";
    opacity: "0";
  }
`;
