import './Header.css';
import logo from './images/1_logo.jpg'; 

import GlobalNav from './GlobalNav';

function Header({changePageToHeader}) {
    return(
        <header className="header">
            <img 
                src={logo} 
                className="header__logo" 
                alt="Logo" 
            />
        <h1 className="header__title">
            Different types of chess in the world
        </h1>
        <GlobalNav changePageToGlobalNav={changePageToHeader} className="header__nav"/>
        </header>
    );
}
export default Header;