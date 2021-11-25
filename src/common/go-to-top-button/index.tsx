import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {FaArrowUp} from "react-icons/all";

const ScrollTopWrapper = styled.div`
    
    .scroll-button {
        position: fixed;
        bottom: 2em;
        right: 2em;
        width: 30px;
        height: 30px;
        background-color: ${({theme}) => theme.fourth};
        padding: 5px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 999;
    }
`;

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <ScrollTopWrapper>
            {isVisible &&
            <div className={"scroll-button"} onClick={scrollToTop}>
                <FaArrowUp color={"black"} />
            </div>}
        </ScrollTopWrapper>
    );
}