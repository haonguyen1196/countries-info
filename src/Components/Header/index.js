import styled from "styled-components";
import { useContext } from "react";

import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/themeContext";
import { Link } from "react-router-dom";

function Header() {
    const themeContext = useContext(ThemeContext)
    return (  
        <HeaderPane className={themeContext.theme}>
            <Link to='/'>
                <span>Where in the world?</span>
            </Link>
            <SwitchMode/>
        </HeaderPane>
    );
}

export default Header;

const HeaderPane = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: var(--box-shadow);

    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: var(--text-shadow);
        cursor: pointer;
    }
`