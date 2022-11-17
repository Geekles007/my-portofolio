import React, {memo, useState} from 'react';
import PageInfo from "./../../common/page-info";
import PageStater from "../../common/page-stater";
import { HelloSectionWrapper } from './styles/default';
import {Element} from "react-scroll";
import DownloadButton from "../../common/download-button";

interface HelloSectionProps {
    ref: any;
    name: string;
}

export interface IPage {
    title: string;
    number: string;
}

const HelloSection = ({ref, name}: HelloSectionProps) => {

    const [title, setTitle] = useState<string>("Introduce");

    return <Element name={name}>
        <HelloSectionWrapper ref={ref}>
            <div className="page-stater">
                <PageInfo title={title}/>
                <PageStater handleTitleChange={setTitle}/>
            </div>
            <div className="info-desc">
                <h1>Hi, I'm</h1>
                <strong>TONDJI NIAT J. Lee</strong>
                <p>I'm a <span>Software Engineer</span> and <span>Graphic designer</span>. I'm very passionated by everything related to technologies and design.</p>
                <DownloadButton />
            </div>
            <div className="_go-down" />
        </HelloSectionWrapper>
    </Element>

}

export default memo(HelloSection);
