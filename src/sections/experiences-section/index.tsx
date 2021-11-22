import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import ExperienceItem from "./children/experience-item";
import {FaUser} from "react-icons/all";

const ExperiencesUIWrapper = styled.section`
  color: ${(props) => (props.theme.textColor)};

  h2 {
    text-align: center;
    font-size: 2em;
    margin-bottom: .2em;
    z-index: 99;
    color: ${(props) => (props.theme.fourth)};
  }

  p {
    text-align: center;
  }

  .timeline-wrapper {
    margin-top: 1em;
  }

`;

interface ExperiencesUIProps {
    name: string;
}

const ExperiencesUI = ({name}: ExperiencesUIProps) => {

    return <>
        <Element name={name}>
            <ExperiencesUIWrapper>
                <h2>Where I worked</h2>
                <p>I have worked for a lot of company in my career, and here is some of them.</p>
                <VerticalTimeline className={"timeline-wrapper"}>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <ExperienceItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                </VerticalTimeline>
            </ExperiencesUIWrapper>
        </Element>
    </>

}

export default memo(ExperiencesUI);