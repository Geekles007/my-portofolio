import styled from "styled-components";
import {size} from "../../../constants";

export const PageStaterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 2em;
  z-index: 99;

  .state-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    
    .li {
      margin-bottom: 2em;
      transition: all .5s 0s ease-in-out;
      
      position: relative;
      display: flex;
      align-items: center;
      content: "";
      height: 6px;
      width: 30px;
      background-color: #aaa;

      span {
        opacity: 0;
        position: absolute;
        width: 100px;
        text-align: right;
        transform: translateX(-90px);
        color: ${(props) => (props.theme.textColor)};
        transition: all .5s 0s ease-in-out;
      }

      &:hover {
        span {
          transform: translateX(-120px);
          opacity: 1;
        }
      }
    }
    
    .li.activated {
      display: flex;
      width: 40px;
      background-color: ${(props) => (props.theme.fourth)};
    }
  }

  @media (max-width: ${size.mobileL}) {
    ul {
      li {
        a {
          height: 5px;
          width: 25px;
        }
        
        &.activated {

          a {
            width: 25px;
          }
        }
      }
    }
  }
`;