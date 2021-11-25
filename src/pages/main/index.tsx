import React, {memo} from 'react';
import HelloSection from "../../sections/hello-section";
import HeaderUI from "../../layout/header";
import styled from "styled-components";
import AboutMeSection from "../../sections/about-me-section";
import me from "./../../assets/images/474157.jpeg";
import {Element} from "react-scroll";
import ExperiencesUI from "../../sections/experiences-section";
import {defaultPadding} from "../../constants";
import StudyUI from "../../sections/study-section";
import FunnyProjects from "../../sections/funny-projects-section";
import ContactMe from "../../sections/contact-me-section";
import ScrollToTop from "../../common/go-to-top-button";

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
    padding: 0 ${defaultPadding};
  }
`;

const MainUI = ({}: MainUIProps) => {

    return <MainWrapper>
        <HeaderUI />
        <HelloSection name={"hello"}/>
        <AboutMeSection name={"about-me"} />
        <ExperiencesUI name={"experiences"} />
        <StudyUI name={"study"} />
        <FunnyProjects name={"funny-projects"} />
        <ContactMe name={"contact-me"} />
        <ScrollToTop />
    </MainWrapper>

}

export default memo(MainUI);