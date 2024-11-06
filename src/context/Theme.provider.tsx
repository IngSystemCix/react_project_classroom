import { ReactNode, useState } from "react";
import { ThemeContext } from "./Theme.context";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children } : ThemeProviderProps) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};