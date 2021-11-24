import React, {memo, ReactNode} from 'react';
import iresto from "./../../../../assets/images/iresto.png";
import {FaGithub, FaLink} from "react-icons/all";
import {ProjectItemWrapper} from "./styles/default";

export interface Project {
    type?: string;
    image?: string;
    title?: string;
    description?: ReactNode;
    stacks?: string[];
    github?: string;
    link?: string;
}

interface ProjectItemProps {
    item?: Project;
    position: "left" | "right";
}

const ProjectItem = ({position, item}: ProjectItemProps) => {

    return <ProjectItemWrapper position={position}>
        <div className="preview">
            <img src={iresto} alt="iresto website"/>
        </div>
        <div className="details">
            <span>Web application</span>
            <h3>IResto.</h3>
            <div className="description-panel">
                Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit. Animi esse itaque omnis rerum sapiente, sint
                soluta <span>suscipit</span>?
            </div>
            <ul>
                <li>Laravel</li>
                <li>Inertia.js</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Node.js</li>
            </ul>
            <div className="actions">
                <a href="#"><FaGithub/></a>
                <a href="#"><FaLink/></a>
            </div>
        </div>
    </ProjectItemWrapper>

}

export default memo(ProjectItem);