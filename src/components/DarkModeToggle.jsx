import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import IconButton from "./IconButton";

import { useDarkMode } from "../contexts/DarkModeContext";
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton type="darkmode-button" onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </IconButton>
  );
}

export default DarkModeToggle;
