import React, {memo} from 'react';
import {PageStaterWrapper} from "./styles";
import {Link} from "react-scroll";

interface PageStaterProps {
    handleTitleChange: (title: string) => void;
}

const PageStater = ({handleTitleChange}: PageStaterProps) => {

    return <PageStaterWrapper>
        <div className={"state-list"}>
            <Link activeClass="activated" to="hello" spy={true} isDynamic={true} smooth={true} offset={-10}
                  duration={500} onSetActive={() => handleTitleChange("introduce")}
                  className={"li"}><span>Introduce</span></Link>
            <Link activeClass="activated" to="about-me" spy={true} smooth={true} offset={-10} duration={500}
                  onSetActive={() => handleTitleChange("about-me")} className={"li"}><span>About me</span></Link>
            <Link activeClass="activated" to="experiences" spy={true} smooth={true} offset={-10} duration={500}
                  onSetActive={() => handleTitleChange("experiences")} className={"li"}><span>Experiences</span></Link>
            <Link activeClass="activated" to="study" spy={true} smooth={true} offset={-10} duration={500}
                  onSetActive={() => handleTitleChange("study")} className={"li"}><span>Study</span></Link>
            <Link activeClass="activated" to="funny-projects" spy={true} smooth={true} offset={-10} duration={500}
                  onSetActive={() => handleTitleChange("funny-projects")}
                  className={"li"}><span>Funny projects</span></Link>
            <Link activeClass="activated" to="contact-me" spy={true} smooth={true} offset={-10} duration={500}
                  onSetActive={() => handleTitleChange("contact-me")} className={"li"}><span>Contact me</span></Link>
        </div>
    </PageStaterWrapper>

}

export default memo(PageStater);