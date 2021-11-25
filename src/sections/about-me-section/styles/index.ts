import styled from "styled-components";

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
      
      strong {
        margin-top: .5em;
        height: 20px;
      }
    }
  }
`;