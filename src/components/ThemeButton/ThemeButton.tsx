import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeButton.scss";

type ThemeTypes={
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

function ThemeButton({handleClose}:ThemeTypes) {
  const { theme, toggleTheme } = useTheme();

  const handleCLick= ()=>{
    handleClose(false)
    toggleTheme()
  }
  return (
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