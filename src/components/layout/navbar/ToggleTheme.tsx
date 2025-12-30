import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme"


const ToggleTheme: React.FC = () => {

    const { theme, toggleTheme } = useTheme();


    return <>
        <button className="cursor-pointer" onClick={toggleTheme}>{theme && theme === "dark" ? <Sun color="yellow" /> : <Moon className="shadow-xl shadow-neutral-600 rounded-xl" />} </button>
    </>
}

export default ToggleTheme;