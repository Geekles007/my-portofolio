import {Project} from "../children/project-item";
import iresto from "./../../../assets/images/iresto.png";
import camerapps from "./../../../assets/images/camerapps.png";
import ibird from "./../../../assets/images/ibird.png";
import zzolloo from "./../../../assets/images/zzollo.png";
import wysiwygism from "./../../../assets/images/wysiwygism.png";
import beingplus from "./../../../assets/images/beingplus.png";
import hooksbible from "./../../../assets/images/hooksbible.png";
import beingmusic from "./../../../assets/images/beingmusic.png";
import bozoo from "./../../../assets/images/bozoo.png";
import henspiration from "./../../../assets/images/henspiration.png";

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
            title: "CamerApps",
            stacks: ["React", "Typescript", "Node.js"],
            description: <>
                Web application to find all community, application (<span>mobile</span> or <span>web</span>) developed in Africa
            </>,
            side: "left"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/beingmusic",
            link: "https://beingmusic.vercel.app",
            image: beingmusic,
            title: "Being Music",
            stacks: ["React", "Typescript", "Node.js", "Affinity designer"],
            description: <>
            Streaming music's web application
            </>,
            side: "left"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/bozoo",
            link: "https://bozoo.vercel.app",
            image: bozoo,
            title: "Bozoo",
            stacks: ["Next.js", "Typescript", "Node.js", "Affinity designer"],
            description: <>
            Afro NFT's marketplace
            </>,
            side: "right"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/henspiration",
            link: "https://henspiration.vercel.app",
            image: henspiration,
            title: "Henspiration streaming app",
            stacks: ["React", "Typescript", "Node.js", "Spotify API", "Vite"],
            description: <>
            Platform to listen an album called henspiration by hens from spotify api
            </>,
            side: "left"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/ibird-group-website-frontend",
            link: "https://ibird-design.vercel.app",
            image: ibird,
            title: "Ibird design website",
            stacks: ["React", "Typescript", "Node.js", "Dribbble API", "Affinity designer"],
            description: <>
                It's my designer portofolio, I really like this job and what I do and I hope my customer too.
            </>,
            side: "right"
        },
        {
            type: "Web application",
            github: "https://github.com/Geekles007/zzollo",
            link: "https://zzolloo.vercel.app",
            image: zzolloo,
            title: "Zzolloo",
            stacks: ["React", "Typescript", "Node.js", "Github API", "bitbucket API", "Gitlab API"],
            description: <>
                A little funny project to make research in github, bitbucket and gitlab at the same time.
            </>,
            side: "left"
        },
        {
            type: "Reusable react component",
            github: "https://github.com/Geekles007/wysiwygism",
            link: "https://wysiwygism.vercel.app",
            image: wysiwygism,
            title: "Wysiwygism",
            stacks: ["React", "Typescript", "Node.js"],
            description: <>
                A wysiwyg editor.
            </>,
            side: "right"
        },
        {
            type: "Website",
            github: "https://github.com/Geekles007/funny-fromscratch-template-works/tree/master/beingplus",
            link: "https://beingplus.vercel.app",
            image: beingplus,
            title: "Beingplus",
            stacks: ["html", "css", "js"],
            description: <>
                Little template developed from scratch.
            </>,
            side: "left"
        },
        {
            type: "Website",
            github: "https://github.com/Geekles007/hooks-bible",
            link: "https://hooks-bible.vercel.app",
            image: hooksbible,
            title: "Hooks Bible",
            stacks: ["React", "Typescript", "Node.js"],
            description: <>
                A project to get some pre written react hook ready to use.
            </>,
            side: "right"
        }
    ]

}

export default new FunnyProjectController();
