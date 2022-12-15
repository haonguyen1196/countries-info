import { useEffect, useRef, useState, useContext } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

import styles from './SwitchStyles.module.scss';
import { ThemeContext } from '../ThemeContext/themeContext'

function SwitchMode() {
    const themeContext = useContext(ThemeContext)
    const refToggle = useRef()
    const refInput = useRef()
    const refCircle = useRef()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        refInput.current.checked = isDark
    }, [isDark])

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked)
        themeContext.toggleTheme()
    }

    useEffect(() => {
        const handleToggleButton = () => {
            if(isDark) {
                refToggle.current.style.background = '#fff'
                refCircle.current.style.background = '#222'
            }else {
                refToggle.current.style.background = 'var(--toggle-background-color)'
                refCircle.current.style.background = '#fff'
            }
        }
        handleToggleButton()    
    }, [isDark])

    return (  
        <div className={styles.toggleMode} ref={refToggle} onClick={handleToggle}>
            <input type="checkbox" className={styles.Input} ref={refInput}/>
            <div className={styles.Icon}>
                { isDark ? <RiMoonFill /> : <RiSunFill /> }
            </div>
            <div className={styles.Circle} ref={refCircle}></div>
        </div>
    );
}

export default SwitchMode;