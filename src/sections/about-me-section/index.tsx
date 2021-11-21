import React, {memo} from 'react';
import JaugeUI from "../../common/jauge";
import LangItemUI from "./children/lang-item";
import {FaBookReader, FaCode, FaDrawPolygon, FaGamepad} from "react-icons/all";
import {currentTheme} from "../../theme/theme";
import { AboutMeSectionWrapper } from './styles';
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos, ipsa numquam perferendis
                        praesentium qui repellat vitae. Ad, aliquid aperiam at maxime minus nam quidem quisquam ratione.
                        Explicabo, nemo quibusdam. Lorem ipsum dolor sit amet.</p>
                    <div className="skill-jauges">
                        <JaugeUI percent={85} title={"Web development"}/>
                        <JaugeUI percent={60} title={"Mobile development"}/>
                        <JaugeUI percent={70} title={"Graphic Design"}/>
                    </div>
                </div>
                <div className="more-details">
                    <h4>Spoken languages</h4>
                    <div className="languages">
                        <LangItemUI lang={"French"} level={"Native"} />
                        <LangItemUI lang={"English"} level={"Intermediate"} />
                        <LangItemUI lang={"Italian"} level={"Level B2"} />
                        <LangItemUI lang={"Russian"} level={"A1 Basic"} />
                    </div>
                    <h4>Hobbies</h4>
                    <div className="hobbies">
                        <div className="hob-card">
                            <FaBookReader color={currentTheme.fourth} size={25} />
                            <strong>Read Book and novels</strong>
                        </div>
                        <div className="hob-card">
                            <FaGamepad color={currentTheme.fourth} size={25} />
                            <strong>Video games</strong>
                        </div>
                        <div className="hob-card">
                            <FaCode color={currentTheme.fourth} size={25} />
                            <strong>Coding</strong>
                        </div>
                        <div className="hob-card">
                            <FaDrawPolygon color={currentTheme.fourth} size={25} />
                            <strong>Design</strong>
                        </div>
                    </div>
                </div>
            </div>
        </AboutMeSectionWrapper>
    </Element>

}

export default memo(AboutMeSection);