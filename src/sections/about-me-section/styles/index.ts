import styled from "styled-components";
import {size} from "../../../constants";

export const AboutMeSectionWrapper = styled.section`
  z-index: 2;
  min-height: 100vh;
  color: ${(props) => (props.theme.textColor)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 1.3em;
    text-align: justify;
  }
  
  h4 {
    font-size: 2em;
    margin-bottom: .5em;
    
    &:last-child {
      margin-top: 0;
    }
  }
  
  .about {
    display: flex;
    
    .skills-and-text{
      z-index: 99;
      width: 40%;
      padding-right: 2em;
      
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        
        li {
          display: flex;
          align-items: center;
          width: 50%;
          margin-bottom: 1em;
          
          &:before {
            height: 2px;
            width: 20px;
            margin-right: 1em;
            background-color: ${(props) => (props.theme.fourth)};
            display: block;
            content: "";
          }
        }
      }
    }
  }
  
  .more-details {
    z-index: 99;
    width: 60%;
  }
  
  .languages {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    width: 100%;
  }
  
  .hobbies {
    display: flex;
    flex-wrap: wrap;
    
    .hob-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 130px;
      padding: .5em;
      height: 130px;
      text-align: center;
      border: 2px solid ${(props) => (props.theme.fourth)};
      margin-right: 1em;
      margin-bottom: 1em;
      
      strong {
        margin-top: .5em;
        height: 20px;
      }
    }
  }
  
  ul._certifs {
    a {
      color: #fff;
      text-decoration: none;
      transition: .5s;
      &:hover {
        color: ${(props) => (props.theme.fourth)};
      }
    }
  }

  @media (max-width: ${size.laptop}) {
    .about {
      flex-direction: column;

      .skills-and-text, .more-details {
        width: 100%;
      }
    }
  }

  @media (max-width: ${size.tabletIpadPro}) {
    .hob-card {
      width: 100px !important;
      height: 100px !important;
    }

    .skills-and-text {
      padding-right: 0 !important;
    }
  }
`;
