import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline} from "react-vertical-timeline-component";
import ExperienceItem from "./children/experience-item";
import DribbbleWorks from "./children/dribbble-works";
import {FaChevronRight} from "react-icons/all";
import {currentTheme} from "../../theme/theme";
import {size} from "../../constants";

const ExperiencesUIWrapper = styled.section`
  color: ${(props) => (props.theme.textColor)};
  display: flex;
  flex-direction: column;
  align-items: center;

  h3, h2 {
    text-align: center;
    font-size: 2em;
    margin-bottom: .2em;
    z-index: 99;
    color: ${(props) => (props.theme.fourth)};
  }

  h3 {
    font-size: 1.5em;
    text-align: left;
  }

  h1 {
    font-size: 2em;
    text-align: center;
    color: ${(props) => (props.theme.fourth)};
  }

  h2 {
    border: 3px solid #fff;
    padding: .5em 1em;
  }

  p {
    text-align: left;
  }

  .timeline-wrapper {
    margin-top: 1em;
    z-index: 99;
  }

  .see-more-button {
    border: 3px solid ${(props) => (props.theme.fourth)};
    padding: .5em 1em;
    color: #fff;

    display: flex;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
    z-index: 99;
    
    ._iconic {
      transform: translateX(5px);
      transition: all .5s 0s ease-in-out;
    }
    
    &:hover {
      ._iconic {
        transform: translateX(12px);
      }
    }
  }

`;

interface ExperiencesUIProps {
    name: string;
}

const ExperiencesUI = ({name}: ExperiencesUIProps) => {

    return <>
        <Element name={name}>
            <ExperiencesUIWrapper>
                <h1>Where I worked</h1>
                <p>I have worked for a lot of company in my career, and here is some of them.</p>

                <h2>As Developer</h2>

                <VerticalTimeline className={"timeline-wrapper"}>
                    <ExperienceItem period={"December 2020 - Febuary 2022"} position="Lead frontend developer" companyName={<>Nizhny Novgorod, Russia - &nbsp;<span className={"important"}>TSN электро</span></>}
                                    myTasks={
                                        <p>
                                            Development of ERP web application (<span>ReactJS, Typescript, GraphQL, Carbon design system</span>) <br/>
                                            Analyse systems and <span>optimize</span> them <br />
                                            Define the <span>micro frontends structure</span> and <span>deployment process</span>
                                        </p>
                                    }/>
                    <ExperienceItem period={"May 2020 - December 2020"} position="Fullstack developer" companyName={<>Nizhny Novgorod, Russia - &nbsp;<span className={"important"}>Web Mechanica</span></>}
                                    myTasks={
                                        <p>
                                            Development of website (<span>fromscratch</span>) for company around the world (<span>Bitrix</span>) <br/>
                                            System maintenances <br />
                                            <a href="https://www.vertex-awp.ru">https://www.vertex-awp.ru</a> <br/>
                                            <a href="https://www.elac.study">https://www.elac.study</a>
                                        </p>
                                    }/>
                    <ExperienceItem period={"January 2016 - August 2019"} position="Web developer freelance"
                                    myTasks={
                                        <p>
                                            Development of a <span>cinema ticket booking</span> application <br />
                                            Development mobile application for <span>money transaction</span> <br />
                                            Development of an <span>interactive map</span> <br />
                                            Development of an <span>audio streaming api</span> <br />
                                            Development of an <span>article writing system</span> <br />
                                            Clinic management system <br />
                                            Development of an application to <span>book travel tickets</span>
                                        </p>
                                    }/>
                    <ExperienceItem period={"March 2017 - August 2017"} position="JAVA/JAVA EE developer"
                                    companyName={<>Germany - &nbsp;<span className={"important"}>Kumity</span></>}
                                    myTasks={
                                        <p>
                                            Development of the money transfer module of an <span>electronic currency</span>
                                        </p>
                                    }/>
                </VerticalTimeline>

                <h2>As Designer</h2>
                <p>I'm really passionated by design and everything related to it and here is some of my latest works</p>

                <DribbbleWorks/>

                <a className={"see-more-button"} href="https://dribbble.com/ibirddesign" target="_blank">See
                    more <FaChevronRight className={"_iconic"} color={currentTheme.fourth}/></a>
            </ExperiencesUIWrapper>
        </Element>
    </>

}

export default memo(ExperiencesUI);
