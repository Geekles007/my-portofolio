import React, {memo} from 'react';
import HelloSection from "../../sections/hello-section";
import HeaderUI from "../../layout/header";
import styled from "styled-components";
import AboutMeSection from "../../sections/about-me-section";
import me from "./../../assets/images/474157.jpeg";
import {Element} from "react-scroll";

interface MainUIProps {

}

const MainWrapper = styled.div`
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${me});
  
  section {
    min-height: 100vh;
  }
`;

const MainUI = ({}: MainUIProps) => {

    return <MainWrapper>
        <HeaderUI />
        <HelloSection name={"hello"}/>
        <AboutMeSection name={"about-me"} />
        <Element name={"experiences"}>
            <section></section>
        </Element>
        <Element name={"study"}>
            <section></section>
        </Element>
        <Element name={"funny-projects"}>
            <section></section>
        </Element>
        <Element name={"my-stack"}>
            <section></section>
        </Element>
        <Element name={"contact-me"}>
            <section></section>
        </Element>
    </MainWrapper>

}

export default memo(MainUI);