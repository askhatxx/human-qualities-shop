import React, {useState, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toogleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const getClasses = () => {
        const classes = ['navbar'];

        if (isOpen) {
            classes.push('open');
        }

        return classes.join(' ');
    }
    
    return (
        <nav className={getClasses()}>
            <NavLink to="/" className="back">Back</NavLink>
            <div className="brend">
                <NavLink to="/">Super Shop</NavLink>
            </div>
            <button className="btn-menu" onClick={toogleOpen}>Menu</button>
            <div className="collapse">
                <button className="btn-close" onClick={toogleOpen}>Close</button>
                <ul>
                    <li>
                        <NavLink to="/">Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/qualities/power">Qualities</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;