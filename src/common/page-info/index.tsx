import React, {memo, useEffect, useState} from 'react';
import styled from "styled-components";
import {size} from "../../constants";
import {IPage} from "../../sections/hello-section";

const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 2em;
  width: 100px;
  
  h2 {
    font-size: 6em;
    margin: 0;
    color: #aaa;
  }
  
  .separator {
    height: 15vh;
    width: 3px;
    background-color: ${(props) => (props.theme.fourth)};
    margin: .5em 0 4.5em 0;
  }
  
  span {
    transform: rotate(90deg);
    font-size: 1.2em;
  }

  @media (max-width: ${size.mobileL}) {
    width: 30px;
    
    h2 {
      font-size: 2em;
    }
  }
`;

interface PageInfoWrapperProps {
    title: string;
}

const pages: Map<string, IPage> = new Map<string, IPage>([
    ["introduce", {
        number: "01",
        title: "Introduction"
    }],
    ["about-me", {
        number: "02",
        title: "About Me"
    }],
    ["experiences", {
        number: "03",
        title: "Experiences"
    }],
    ["study", {
        number: "04",
        title: "Study"
    }],
    ["funny-projects", {
        number: "05",
        title: "Funny Projects"
    }],
    ["contact-me", {
        number: "06",
        title: "Contact Me"
    }],
])

const PageInfo = ({title}: PageInfoWrapperProps) => {

    const [current, setCurrent] = useState<IPage | undefined>(pages.get("introduce") ?? undefined)

    useEffect(() => {
        setCurrent((c) => {
            return pages.get(title);
        })
    }, [title])

    return <PageInfoWrapper>
        <h2>{current?.number ?? ""}</h2>
        <div className="separator" />
        <span>{current?.title ?? ""}</span>
    </PageInfoWrapper>

}

export default memo(PageInfo);