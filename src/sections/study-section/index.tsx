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
                    <StudyItem period={"2019 - present"} position="Lobachevsky University" companyName={"Nizhny Novgorod, Russia"} icon={<img src={unn} alt={"unn logo"} />}
                               myTasks={"Bachelor - Institute of Information Technology, Mathematics and Mechanics"}/>
                    <StudyItem period={"2015 - 2016"} position="3IL Limoges" companyName={"Limoges, France"} icon={<img src={bachelor} alt={"3il logo"} />}
                               myTasks={"Diploma in information system design"}/>
                    <StudyItem period={"2013 - 2014"} position="New Brunswick Community College" companyName={"New brunswick, Canada"} icon={<img src={ccnb} alt={"ccnb logo"} />}
                                    myTasks={"DEC Analysis and Programming"}/>
                </VerticalTimeline>
            </section>
        </Element>
    </StudyUIWrapper>

}

export default memo(StudyUI);