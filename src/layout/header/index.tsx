import React, {memo} from 'react';
import styled from "styled-components";
import {FaDribbble, FaGithub, FaInstagram, FaLinkedin} from "react-icons/all";
import {currentTheme} from "../../theme/theme";
import {size} from "../../constants";
import logo from "./../../assets/images/ebirly-white.svg"

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
      width: 70px;
      height: 70px;
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
            <a className="_logo" href={"/"}><img src={logo} alt="logo ebirly Lee"/></a>
            <ul>
                <li><a rel="noreferrer" href="https://www.instagram.com/ibird.design/" target={"_blank"}><FaInstagram size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a rel="noreferrer" href="https://dribbble.com/ibirddesign" target="_blank"><FaDribbble size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a rel="noreferrer" href="https://github.com/Geekles007" target={"_blank"}><FaGithub size={iconSize} color={currentTheme.textColor} /></a></li>
                <li><a rel="noreferrer" href={"https://www.linkedin.com/company/64646551"} target="_blank"><FaLinkedin size={iconSize} color={currentTheme.textColor} /></a></li>
            </ul>
        </div>
    </HeaderUIWrapper>

}

export default memo(HeaderUI);