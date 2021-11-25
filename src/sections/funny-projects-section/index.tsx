import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import ProjectItem from "./children/project-item";
import {size} from "../../constants";

const FunnyProjectsWrapper = styled.div`

  section {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2em;
      text-align: center;
      color: ${(props) => (props.theme.fourth)};
    }

    .list-projects {
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 1.5em;
    }
  }

`;

interface FunnyProjectsProps {
    name: string;
}

const FunnyProjects = ({name}: FunnyProjectsProps) => {

    return <FunnyProjectsWrapper>
        <Element name={"funny-projects"}>
            <section>
                <h2>Some funny things that I've built</h2>

                <div className="list-projects">
                    <ProjectItem position={"right"}/>
                    <ProjectItem position={"left"}/>
                    <ProjectItem position={"right"}/>
                </div>
            </section>
        </Element>
    </FunnyProjectsWrapper>

}

export default memo(FunnyProjects);