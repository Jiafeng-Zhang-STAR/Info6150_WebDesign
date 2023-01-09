import './Header.css';
import logo from './images/0_logo.png'; 

import GlobalNav from './GlobalNav';

function Header({changePageToHeader, changeColor, theme}) {
    return(
        <header className={`header ${theme}`}>
            <img 
                src={logo} 
                className="header__logo" 
                alt="Logo" 
            />
        <h1 className={`header__title ${theme}`}>
            Elemental People World
        </h1>
        <GlobalNav changePageToGlobalNav={changePageToHeader} changeColor={changeColor} theme={theme} className="header__nav"/>
        </header>
    );
}
export default Header;