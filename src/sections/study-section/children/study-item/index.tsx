import React, {memo, ReactNode} from 'react';
import styled from "styled-components";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {currentTheme} from "../../../../theme/theme";
import {FaUser} from "react-icons/all";
import {IconType} from "react-icons";

const StudyItemWrapper = styled(VerticalTimelineElement)`
  &.basic {

    h3 {
      font-size: 1.2em;
      color: ${(props) => (props.theme.fourth)};
    }

    h4 {
      color: ${(props) => (props.theme.textColor)};
      font-style: italic;
      font-weight: 500;
      margin-top: .5em;

      display: flex;
      align-items: center;

      &:before {
        content: "";
        display: block;
        height: 1px;
        width: 15px;
        background-color: ${(props) => (props.theme.fourth)};
        margin-right: .5em;
      }
    }

    .paragraph {
      text-align: left;
      font-size: .9em;
      margin-top: 1em;
    }
  }
`;

interface StudyItemProps {
    position: string;
    companyName: string;
    myTasks: ReactNode | string;
    period: string;
    icon?: ReactNode;
}

const StudyItem = ({position, companyName, myTasks, period, icon}: StudyItemProps) => {

    return <StudyItemWrapper
        className="basic"
        contentStyle={{ background: currentTheme.primary, color: '#fff', borderBottomColor: currentTheme.fourth }}
        contentArrowStyle={{ borderRight: '7px solid ' + currentTheme.primary}}
        date={period}
        iconStyle={{ background: currentTheme.primary, color: currentTheme.fourth, overflow: "hidden" }}
        icon={icon ?? <FaUser/>}
    >
        <h3 className="vertical-timeline-element-title">{position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{companyName}</h4>
        <div className={"paragraph"}>
            {myTasks}
        </div>
    </StudyItemWrapper>

}

export default memo(StudyItem);