import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeButton.scss";

//Types--------------------------------
type ThemeTypes={
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

function ThemeButton({handleClose}:ThemeTypes) {
  const { theme, toggleTheme } = useTheme(); //Toggle function from Theme Context

  //Click handler: Toggles theme and closes sidebar
  const handleCLick= ()=>{
    handleClose(false)
    toggleTheme()
  }

  //Component---------------------------------------------------
  return (
    // Icon changes based on theme
    <button className="theme" onClick={() => handleCLick()}>
      {theme === "light" ? (
        <FaMoon className="icon_moon" />
      ) : (
        <FaSun className="icon_sun" />
      )}
    </button>
  );
}

export default ThemeButton;