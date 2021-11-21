import React, {memo} from 'react';
import styled from "styled-components";

const LangItemUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% / 3);
  margin-bottom: 2em;
  
  strong {
    font-size: 1.2em;
    color: ${(props) => (props.theme.fourth)};
  }
  
  span{
    font-size: 1em;
    margin-top: .3em;
    font-style: italic;
  }
`;

interface LangItemUIProps {
    lang: string;
    level: string;
}

const LangItemUI = ({lang, level}: LangItemUIProps) => {

    return <LangItemUIWrapper>
        <strong>{lang}</strong>
        <span>{level}</span>
    </LangItemUIWrapper>

}

export default memo(LangItemUI);