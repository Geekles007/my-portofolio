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
    text-align: center;
  }

  .timeline-wrapper {
    margin-top: 1em;
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
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
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