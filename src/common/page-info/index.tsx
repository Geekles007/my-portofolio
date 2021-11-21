import React, {memo} from 'react';
import styled from "styled-components";
import {size} from "../../constants";

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
    pageNumber: string;
}

const Index = ({title, pageNumber}: PageInfoWrapperProps) => {

    return <PageInfoWrapper>
        <h2>{pageNumber}</h2>
        <div className="separator"></div>
        <span>{title}</span>
    </PageInfoWrapper>

}

export default memo(Index);