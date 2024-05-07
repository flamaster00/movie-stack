import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
