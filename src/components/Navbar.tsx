import React, {useState, useEffect} from 'react';
import {NavLink, useLocation, useHistory} from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    const history = useHistory();
    
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

    const getClassesBack = () => {
        return location.pathname === '/' ? 'back hidden' : 'back';
    }

    return (
        <nav className={getClasses()}>
            <div onClick={() => {history.goBack()}} className={getClassesBack()}>‹</div>
            <div className="brend">
                <NavLink to="/">Super Shop</NavLink>
            </div>
            <button className="btn-menu" onClick={toogleOpen}>≡</button>
            <div className="menu collapse">
                <button className="btn-close" onClick={toogleOpen}>×</button>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" exact>Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/qualities" activeClassName="active">Qualities</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" activeClassName="active">Cart</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;