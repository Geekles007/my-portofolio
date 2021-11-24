import {memo} from "react";
import * as React from "react";
import styled from "styled-components";

interface WorkItemProps {
    item?: Post;
}

const WorkItemWrapper = styled.a`
  background: var(${props => props.theme.fourth}, ${props => props.theme.primary});
  box-shadow: 0 2px 4px var(rgba(0, 0, 0, 0.2));
  border-radius: 3px;
  transition: .3s;
  z-index: 99;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export interface Post {
    id?: number;
    description?: string;
    html_url?: string;
    title?: string;
    images?: any;
}

const WorkItem = ({item}: WorkItemProps) => {

    return (
        <WorkItemWrapper href={item?.html_url} target="_blank">
            <img src={item?.images?.hidpi ?? ""} alt={item?.title}/>
        </WorkItemWrapper>
    );

}

export default memo<WorkItemProps>(WorkItem);