
import { useEffect} from "react"
import { useTheme } from "../hooks/useTheme";



const Home: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log("sherif");
    console.log(localStorage.getItem("theme"));
  }, [theme]);

  useEffect(() => {
    console.log(window.document.documentElement.classList);
  }, [theme]);

  return (
    <>

      <section className={`h-screen bg-light-tart dark:bg-dark-ogin`}>
        <h1 className="text-center m-4 font-bold text-4xl text-maroon dark:text-white">Home pages</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </section>
    </>
  );
};

export default Home;