import styled, {keyframes} from "styled-components";
import {size} from "../../../constants";

export const bounceWheel = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const HelloSectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Raleway", serif;
  color: ${(props) => (props.theme.textColor)};
  overflow: hidden;
  position: relative;

  .page-stater {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 4;
    height: 100%;
    width: 100%;
    align-items: center;
  }
  
  .resume-button {
    border: 3px solid ${(props) => (props.theme.fourth)};
    padding: 1em 1em;
    color: #fff;
    margin: 1em 0;

    display: flex;
    align-items: center;
    text-decoration: none;
    
    cursor: pointer;
  }

  .info-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 99;
    color: ${(props) => (props.theme.textColor)};
    margin-left: 2em;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 6em;
      margin: 0;
    }

    strong {
      color: ${(props) => (props.theme.fourth)};
      margin: .5em 0;
      font-size: 3em;
    }

    p {
      font-size: 1.2em;
      margin: 0;
      line-height: 25px;
      width: 450px;
    }
  }

  ._go-down {
    height: 60px;
    width: 30px;
    border: 2px solid #fff;
    position: absolute;
    bottom: 2em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;

    display: flex;
    justify-content: center;

    &:after {
      content: "";
      display: block;
      height: 10px;
      width: 4px;
      border-radius: 50px;
      background-color: ${(props) => (props.theme.fourth)};
      margin-top: 10px;
      animation: ${bounceWheel} 1s linear infinite;
    }
  }

  @media (max-width: ${size.laptop}) {
    .info-desc {
      h1 {
        font-size: 4em;
      }

      strong {
        font-size: 2.5em;
      }

      p {
        font-size: 1.1em;
      }
    }
  }

  @media (max-width: ${size.mobileL}) {
    .page-stater {
      padding: 0 1em;
    }
    
    ._go-down {
      height: 45px;
      width: 25px;

      &:after {
        height: 6px;
        width: 3px;
      }
    }
    
    .info-desc {
      h1 {
        font-size: 4em;
      }

      strong {
        font-size: 2.5em;
      }

      p {
        font-size: 1.1em;
        width: 250px;
      }
    }
  }

`;