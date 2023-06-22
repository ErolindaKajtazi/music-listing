import './Header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
    return <header className='header-layout'>
        <div className='header-links'>
            <Link to='/'>Home</Link>
            <Link to="/album">Music List</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    </header>
}

export default Header;