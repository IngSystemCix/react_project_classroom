import { useCallback, useContext } from "react";
import { ThemeContext } from "../../context";

export const ToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggleTheme = useCallback(() => {
        setTheme(theme === "light" ? "dark" : "light");
    }, [theme, setTheme]);

    return (
        <button onClick={handleToggleTheme}>
            Toggle theme: {theme}
        </button>
    );
};