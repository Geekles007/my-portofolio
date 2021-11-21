import React, {memo, useState} from 'react';
import PageInfo from "./../../common/page-info";
import PageStater from "../../common/page-stater";
import { HelloSectionWrapper } from './styles/default';
import {Element} from "react-scroll";

interface HelloSectionProps {
    ref: any;
    name: string;
}

const HelloSection = ({ref, name}: HelloSectionProps) => {

    const [title, setTitle] = useState("Introduce");

    return <Element name={name}>
        <HelloSectionWrapper ref={ref}>
            <div className="page-stater">
                <PageInfo title={title} pageNumber={"01"}/>
                <PageStater handleTitleChange={setTitle}/>
            </div>
            <div className="info-desc">
                <h1>Hi, I'm</h1>
                <strong>TONDJI NIAT Jauspin Lee</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dicta eos minus omnis
                    quasi quidem, tempora? Ea eligendi enim.</p>
            </div>
            <div className="_go-down" />
        </HelloSectionWrapper>
    </Element>

}

export default memo(HelloSection);