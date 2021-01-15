import { Link } from "react-router-dom";

const Navbar = () => {

    const navvStyle = {
        borderRadius: '10px',
        color: 'white',
        padding: '10px',
        border: '1px solid white',
        textDecoration: 'none'
    }

    return (
        <nav>
            <h1>ARC'd React Page</h1>
            <ul className='nav-links' >
                <Link to='/' style={navvStyle}>
                    <li>Home</li>
                </Link>
                <Link to='/cards' style={navvStyle}>
                    <li>Cards</li>
                </Link>
                <Link to='/ebook-library' style={navvStyle}>
                    <li> E-Book Library</li>
                </Link>
                <Link to='about' style={navvStyle}>
                    <li>About Me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;