import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext/themeContext"

function Footer() {
    const themeContext = useContext(ThemeContext)
    return (  
        <FooterContainer className={themeContext.theme}>
            <h4>Copyright © Hào Nguyễn</h4>
            <p>nguyenanhhao289@gmail.com</p>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 8vh;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: var(--box-shadow);
`