import useLocalStroage from "./useLocalStroage";
import './styles.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>HELLO WORLD</p>
        <button onClick={handleToggleTheme}>CHANGE THEME</button>
      </div>
    </div>
  );
}
