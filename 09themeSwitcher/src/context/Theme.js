import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    // these are default values 
    // we can write methods as well as variable
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

export function useTheme() {
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider

