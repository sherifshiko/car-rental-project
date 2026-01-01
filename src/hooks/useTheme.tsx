import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme as Theme : "light";
  });

  const[isDark,setIsDark]=useState<boolean>(false)

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark")
      setIsDark(true)
    } else {
      root.classList.remove("dark")
      setIsDark(false)
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = (): void => {
    setTheme((prev) => prev === "dark" ? "light" : "dark")
  }

  const setDark = (): void => setTheme("dark");
  const setLight = (): void => setTheme("light");

  return { theme, setDark, setLight, toggleTheme,isDark }
}