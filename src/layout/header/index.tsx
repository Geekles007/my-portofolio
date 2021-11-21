import React, {memo} from 'react';
import styled from "styled-components";
import {FaDribbble, FaGithub, FaInstagram, FaLinkedin} from "react-icons/all";
import {currentTheme} from "../../theme/theme";
import {size} from "../../constants";

const HeaderUIWrapper = styled.div`
  background-color: transparent;
  position: fixed;
  height: 100px;
  width: 100%;
  z-index: 9;
  
  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 2em;
    justify-content: space-between;

    ._logo {
      color: ${(props) => props.theme.textColor};
      text-decoration: none;
      font-weight: 700;
      font-size: 2.5em;
      font-family: "Poppins", serif;
    }

    ul {
      list-style-type: none;
      display: flex;
      
      li {
        margin-left: .5em;
      }
    }
  }

  @media (max-width: ${size.mobileL}) {
    height: 60px;
    
    .header-content{
      padding: 0 1em;
      
      ._logo {
        font-size: 1.5em;
      }
    }
  }
`;

interface HeaderUIProps {

}

const iconSize = "20px";

const HeaderUI = ({}: HeaderUIProps) => {

    return <HeaderUIWrapper>
        <div className="header-content">
            <a className="_logo" href={"#"}>TNJL</a>
            <ul>
                <li><a href="#"><FaInstagram size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a href="#"><FaDribbble size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a href="#"><FaGithub size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a href="#"><FaLinkedin size={iconSize} color={currentTheme.textColor} /></a></li>
            </ul>
        </div>
    </HeaderUIWrapper>

}

export default memo(HeaderUI);