// src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Header;
