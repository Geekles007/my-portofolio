import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import WorkItem, {Post} from "../work-item";
import {size} from "../../../../constants";

interface WorksViewerProps {
    loading: boolean;
    posts: Array<Post>;
}

const WorksViewerWrapper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: calc(4 * 8px);
  grid-auto-flow: dense;

  @media (max-width: ${size.tabletIpadPro}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const WorksViewer = ({loading, posts = []}: WorksViewerProps) => {

    if(loading) return <>Loading...</>

    return (
        <WorksViewerWrapper>
            {
                posts.slice(0, 10).map((item: any) => {
                    return (
                        <WorkItem key={item.id} item={item} />
                    );
                })
            }
        </WorksViewerWrapper>
    );

}

export default memo<WorksViewerProps>(WorksViewer);