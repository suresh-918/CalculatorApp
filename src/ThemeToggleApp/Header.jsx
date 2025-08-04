import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 


function Header(){

    const {theme} = useContext(ThemeContext);

    const headerstyle = {
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '20px'
    }

    return (
        <header style={headerstyle}>
            <h1>Header Component</h1>
            <p>Current Theme : {theme}</p>
        </header>
    )
}

export default Header;