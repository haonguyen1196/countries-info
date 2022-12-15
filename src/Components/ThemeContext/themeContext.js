import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('lightTheme')
    
    const toggleTheme = () => {
        setTheme( theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')
    }

    const valueTheme = {theme, toggleTheme}

    return (  
        <ThemeContext.Provider value={valueTheme}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;