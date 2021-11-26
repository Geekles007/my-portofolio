import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";
import ProjectItem, {Project} from "./children/project-item";
import {size} from "../../constants";
import FunnyProjectController from "./controller";

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
        <Element name={name}>
            <section>
                <h2>Some funny things that I've built</h2>

                <div className="list-projects">
                    {
                        FunnyProjectController.projects?.map((item: Project) => {
                            return <ProjectItem item={item} position={item.side ?? "right"}/>
                        })
                    }
                </div>
            </section>
        </Element>
    </FunnyProjectsWrapper>

}

export default memo(FunnyProjects);