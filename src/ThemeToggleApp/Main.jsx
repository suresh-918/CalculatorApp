import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Main(){

    const {theme, setTheme} = useContext(ThemeContext);

    const ToggleTheme = () =>{
        setTheme(prev => (prev === 'light' ? 'dark' : 'light') );
    }

    const mainstyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px' 
}

    return (
        <main style={mainstyle}>
            <h1>Main Component</h1>
            <p>Current Theme : {theme}</p>
            <button onClick={ToggleTheme}>Toggle Theme</button>
        </main>
    )
}

export default Main;