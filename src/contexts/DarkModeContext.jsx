import PropTypes from "prop-types";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

// DarkModeProvider.propTypes = {
//   children: PropTypes.array,
// };

function DarkModeProvider({ children }) {
  //Use current users dark mode settings to decide if we should set dark mode by default or not
  const autoSetDarkMode = !!window.matchMedia("(prefers-color-scheme:dark)")
    .matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    autoSetDarkMode,
    "isDarkMode"
  ); //Sets the state and synchronises it with local storage, could just use useState here
  // const isDarkMode = false;
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((currentState) => !currentState);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
