import React, {memo, ReactNode} from 'react';
import iresto from "./../../../../assets/images/iresto.png";
import {FaGithub, FaLink} from "react-icons/all";
import {ProjectItemWrapper} from "./styles/default";

export interface Project {
    type?: string;
    image?: any;
    title?: string;
    description?: ReactNode | string;
    stacks?: string[];
    github?: string;
    link?: string;
    side?: "left" | "right"
}

interface ProjectItemProps {
    item?: Project;
    position: "left" | "right";
}

const ProjectItem = ({position, item}: ProjectItemProps) => {

    return <ProjectItemWrapper position={position}>
        <div className="preview">
            <img src={item?.image ?? ""} alt={item?.title}/>
        </div>
        <div className="details">
            <span>{item?.type ?? ""}</span>
            <h3>{item?.title ?? ""}.</h3>
            <div className="description-panel">
                {item?.description ?? ""}
            </div>
            <ul>
                {
                    item?.stacks?.map(stack => {
                        return <li>{stack}</li>
                    })
                }
            </ul>
            <div className="actions">
                {
                    item?.github ? <a rel="noreferrer" href={item?.github ?? "#"} target={"_blank"}><FaGithub/></a> : <></>
                }
                {
                    item?.link ? <a rel="noreferrer" href={item?.link ?? ""} target={"_blank"}><FaLink/></a> : <></>
                }
            </div>
        </div>
    </ProjectItemWrapper>

}

export default memo(ProjectItem);
