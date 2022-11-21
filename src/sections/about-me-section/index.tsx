import React, {memo} from 'react';
import JaugeUI from "../../common/jauge";
import LangItemUI from "./children/lang-item";
import {FaBookReader, FaCode, FaDrawPolygon, FaGamepad} from "react-icons/all";
import {currentTheme} from "../../theme/theme";
import {AboutMeSectionWrapper} from './styles';
import {Element} from "react-scroll";

interface AboutMeSectionProps {
    name: string;
}

const AboutMeSection = ({name}: AboutMeSectionProps) => {

    return <Element name={name}>
        <AboutMeSectionWrapper>
            <div className="about">
                <div className="skills-and-text">
                    <h4>Who I Am</h4>
                    <p>During my all career as developer I learned a lot from others
                        (<span>teammates</span>, <span>customers</span>, etc...) -
                        and with time I acquired a lot of <span>experiences</span> and <span>knowledges</span>. I'm
                        always ready to learn news things and improve myself as person and as developer.</p>
                    <div className="skill-jauges">
                        <JaugeUI percent={85} title={"Web development"}/>
                        <JaugeUI percent={60} title={"Mobile development"}/>
                        <JaugeUI percent={70} title={"Graphic Design"}/>
                    </div>
                    <h4>My Stack</h4>
                    <ul>
                        <li>React</li>
                        <li>Angular 2+</li>
                        <li>Node.js</li>
                        <li>Typescript</li>
                        <li>Micro frontends</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Affinity Designer</li>
                        <li>PostgreSQL</li>
                        <li>Flutter</li>
                        <li>Laravel</li>
                        <li>Next.js</li>
                        <li>Nest.js</li>
                    </ul>
                    <h4>My certifications</h4>
                    <ul className={"_certifs"}>
                        <li><a rel="noreferrer" target={"_blank"} href="https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/">Microfrontends with React</a></li>
                        <li><a rel="noreferrer" target={"_blank"} href="https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries">Front End Librairies</a></li>
                        <li><a rel="noreferrer" target={"_blank"} href="https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures">Javascript Algorithms and Data Structures</a></li>
                    </ul>
                </div>
                <div className="more-details">
                    <h4>Spoken languages</h4>
                    <div className="languages">
                        <LangItemUI lang={"French"} level={"Native"}/>
                        <LangItemUI lang={"English"} level={"Intermediate"}/>
                        <LangItemUI lang={"Italian"} level={"Level B2"}/>
                        <LangItemUI lang={"Russian"} level={"A1 Basic"}/>
                    </div>
                    <h4>Hobbies</h4>
                    <div className="hobbies">
                        <div className="hob-card">
                            <FaBookReader color={currentTheme.fourth} size={25}/>
                            <strong>Read Book and novels</strong>
                        </div>
                        <div className="hob-card">
                            <FaGamepad color={currentTheme.fourth} size={25}/>
                            <strong>Video games</strong>
                        </div>
                        <div className="hob-card">
                            <FaCode color={currentTheme.fourth} size={25}/>
                            <strong>Coding</strong>
                        </div>
                        <div className="hob-card">
                            <FaDrawPolygon color={currentTheme.fourth} size={25}/>
                            <strong>Design</strong>
                        </div>
                    </div>
                </div>
            </div>
        </AboutMeSectionWrapper>
    </Element>

}

export default memo(AboutMeSection);
