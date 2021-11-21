import React, {memo} from 'react';
import styled from "styled-components";

const JaugeUIWrapper = styled.div<{percent: number}>`
  width: 100%;
  margin-bottom: 1em;
  
  strong {
    font-size: 1em;
  }
  
  .jauge {
    border: 2px solid ${(props) => (props.theme.textColor)};
    padding: 2px;
    margin-top: .4em;
    
    &:after {
      background-color: ${(props) => (props.theme.fourth)};
      height: 3px;
      width:  ${(props) => props.percent + "%"};
      display: block;
      content: "";
    }
  }
`;

interface JaugeUIProps {
    title: string;
    percent: number;
}

const JaugeUI = ({title, percent}: JaugeUIProps) => {

    return <JaugeUIWrapper percent={percent}>
        <strong>{title}</strong>
        <div className="jauge" />
    </JaugeUIWrapper>

}

export default memo(JaugeUI);