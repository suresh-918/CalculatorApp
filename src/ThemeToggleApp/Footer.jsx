import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 


function Footer(){

    const {theme} = useContext(ThemeContext);

    const footerstyle = {
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '14px'
    }

    return (
        <footer style={footerstyle}>
            <h1>Footer Component</h1>
            <p>Current Theme : {theme}</p>
        </footer>
    )
}

export default Footer;