import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline} from "react-vertical-timeline-component";
import ExperienceItem from "./children/experience-item";

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

`;

interface ExperiencesUIProps {
    name: string;
}

const ExperiencesUI = ({name}: ExperiencesUIProps) => {

    return <>
        <Element name={name}>
            <ExperiencesUIWrapper>
                <h3>Where I worked</h3>
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

                {/*Dribbble api*/}
            </ExperiencesUIWrapper>
        </Element>
    </>

}

export default memo(ExperiencesUI);