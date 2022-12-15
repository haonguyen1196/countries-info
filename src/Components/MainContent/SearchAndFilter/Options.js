import styled from "styled-components";
import { ImEarth } from 'react-icons/im'
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { useContext, useEffect, useRef } from "react";

import { ThemeContext } from '../../ThemeContext/themeContext'
import Option from "./Option";

const RegionsList = [
    { icon: ImEarth, value: 'All'},
    { icon: FaGlobeAfrica, value: 'Africa' },
    { icon: FaGlobeAmericas, value: 'Americas' },
    { icon: FaGlobeAsia, value: 'Asia' },
    { icon: FaGlobeEurope, value: 'Europe' },
    { icon: GiEarthAsiaOceania, value: 'Oceania' },
  ];


function Options({isShowOption}) {
    const themeContext = useContext(ThemeContext)
    const refOptionPane = useRef()


    useEffect(() => {
            if (isShowOption) {
                refOptionPane.current.style.maxHeight = `${refOptionPane.current.scrollHeight}px`
                refOptionPane.current.style.transform = 'scaleY(1)'
            } else {
                refOptionPane.current.style.maxHeight = '0px'
                refOptionPane.current.style.transform = 'scaleY(0)'
            }

    }, [isShowOption])



    return (  
        <OptionsPane className={themeContext.theme} ref={refOptionPane}>
            {RegionsList.map((region) => {
                return <Option key={region.value} region={region}/>
            })}
        </OptionsPane>
    );
}

export default Options;

const OptionsPane = styled.div`
    margin-top: 2px;
    border-radius: 4px;
    overflow: hidden;
    width: 160px;
    box-shadow: var(--box-shadow);
    z-index: 10;
    position: absolute;
    
`
