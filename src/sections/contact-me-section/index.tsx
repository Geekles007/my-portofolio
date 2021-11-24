import React, {memo} from 'react';
import styled from "styled-components";
import {Element} from "react-scroll";

const ContactMeWrapper = styled.div`

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    
    h1 {
      margin: 0;
      font-size: 4em;
      color: ${(props) => (props.theme.fourth)};
    }
    
    p {
      width: 500px;
      color: ${(props) => (props.theme.textColor)};
      margin: 1em 0;
    }
    
    a{
      border: 3px solid ${(props) => (props.theme.fourth)};
      padding: .5em 1em;
      color: #fff;
      margin: 1em 0;

      display: flex;
      align-items: center;
      text-decoration: none;

      cursor: pointer;
      z-index: 99;
    }
    
  }
  
  .copyright {
    position: absolute;
    bottom: 1em;
    color: ${(props) => (props.theme.textColor)};
    z-index: 99;
    
    display: flex;
    flex-direction: column;
    font-size: .9em;
    
    ._copy-text {
      margin-bottom: .5em;
    }
  }

`;

interface ContactMeProps {
    name: string;
}

const ContactMe = ({name}: ContactMeProps) => {

    return <ContactMeWrapper>
        <Element name={name}>
            <section>
                <h1>Get In Touch</h1>
                <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you
                    have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a href="mailto:tondjilee@gmail.com" className="sayHello">Say Hello</a>

                <div className="copyright">
                    <span className="_copy-text">Designed & Built with ❤️ by Niat Lee</span>
                    <span>&copy; Copyright {(new Date()).getFullYear()}</span>
                </div>
            </section>
        </Element>
    </ContactMeWrapper>

}

export default memo(ContactMe);