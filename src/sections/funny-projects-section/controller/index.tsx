import {Project} from "../children/project-item";
import iresto from "./../../../assets/images/iresto.png";
import camerapps from "./../../../assets/images/camerapps.png";
import ibird from "./../../../assets/images/ibird.png";

class FunnyProjectController {

    projects: Project[] = [
        {
            type: "Web application",
            github: "https://github.com/Geekles007/irestau",
            image: iresto,
            title: "IResto",
            stacks: ["Laravel", "Inertia.js", "React", "Typescript", "Node.js"],
            description: <>
                IResto is a web application to order <span>fastfood</span>. All designed and develop fromscratch
            </>,
            side: "right"
        },
        {
            type: "Web application",
            github: "https://github.com/osscameroon/camerapps",
            image: camerapps,
            title: "IResto",
            stacks: ["React", "Typescript", "Node.js"],
            description: <>
                Web application to find all community, application (<span>mobile</span> or <span>web</span>) developed in Africa
            </>,
            side: "left"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/ibird-group-website-frontend",
            link: "http://www.ibird-group.com",
            image: ibird,
            title: "Ibird design website",
            stacks: ["React", "Typescript", "Node.js", "Dribbble API"],
            description: <>
                It's my designer portofolio, I really like this job and what I do and I hope my customer too.
            </>,
            side: "right"
        },
    ]

}

export default new FunnyProjectController();