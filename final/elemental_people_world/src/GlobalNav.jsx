import './css-gg.css';
import './GlobalNav.css';

import { useState } from 'react';
import globalNavMenu from "./globalNavMenu.js";



function GlobalNav({className,changePageToGlobalNav,changeColor,theme}) {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    const list = globalNavMenu.map( item => {
        return ( 
                <li className="global-nav__item" key={item.name}>
                    <a className="global-nav__link" href={item.path} onClick={changePageToGlobalNav}> 
                        {item.name} 
                    </a>
                </li>
                );         
    });
    

    const showClass = showMenu ? 'global-nav__list--open':'';
    const showDropDownClass = showDropDownMenu ? 'global-nav__dropdownlist--open':'';

    return(
        <nav className={`global-nav ${className} ${theme}`}>
            <div className="btn-menu">
                <button 
                    className= "global-nav__button"
                    onClick={() => {setShowMenu(!showMenu);}}
                    aria-label = {showMenu ? "Close Menu": "Open Menu"}
                >
                    <i className="gg-menu"/>
                </button>
            </div>
            <ul className={`global-nav__list ${showClass}`}> 
            { list }
            <div className='theme__change'>
                    <button className="button__Theme" onClick={() => {setShowDropDownMenu(!showDropDownMenu);}}>Theme</button>
                    <ul className={`global-nav__list--dropdown ${showDropDownClass}`}>
                        <li className="navigation__menu--item1"  ><a className="navigation__link--1" href={'white'} onClick={changeColor }>White</a></li>
                        <li className="navigation__menu--item2" ><a className="navigation__link--2"  href={'golden'} onClick={changeColor}>Golden</a></li>
                        <li className="navigation__menu--item3"><a className="navigation__link--3"  href={'green'} onClick={changeColor}>Green</a></li>
                    </ul>
            </div>
            </ul>

        </nav>
    );
}
export default GlobalNav;