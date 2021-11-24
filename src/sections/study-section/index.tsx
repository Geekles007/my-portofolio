import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import {VerticalTimeline} from "react-vertical-timeline-component";
import StudyItem from "./children/study-item";
import ccnb from "./../../assets/images/ccnb.png";
import bachelor from "./../../assets/images/3il.png";
import unn from "./../../assets/images/unn.png";

const StudyUIWrapper = styled.div`
  
  section {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
      font-size: 1.8em;
      color: ${(props) => (props.theme.fourth)};
    }
    
    img {
      width: 100%;
    }
  }
`;

interface StudyUIProps {
    name: string;
}

const StudyUI = ({name}: StudyUIProps) => {

    return <StudyUIWrapper>
        <Element name={name}>
            <section>
                <h2>About my educational background</h2>

                <VerticalTimeline className={"timeline-wrapper"}>
                    <StudyItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"} icon={<img src={unn} alt={"unn logo"} />}
                               myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <StudyItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"} icon={<img src={bachelor} alt={"3il logo"} />}
                               myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                    <StudyItem period={"2011 - present"} position="Creative Director" companyName={"Miami, FL"} icon={<img src={ccnb} alt={"ccnb logo"} />}
                                    myTasks={"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}/>
                </VerticalTimeline>
            </section>
        </Element>
    </StudyUIWrapper>

}

export default memo(StudyUI);