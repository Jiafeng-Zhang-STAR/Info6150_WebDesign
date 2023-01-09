import './css-gg.css';
import './GlobalNav.css';

import { useState } from 'react';
import globalNavMenu from "./globalNavMenu.js";



function GlobalNav({className,changePageToGlobalNav}) {
    const [showMenu, setShowMenu] = useState(false);

    const list = globalNavMenu.map( item => {
        return ( <li className="global-nav__item" key={item.name}>
                    <a className="global-nav__link" href={item.path} onClick={changePageToGlobalNav}> 
                        {item.name} 
                    </a>
                </li>
                );         
    });

    const showClass = showMenu ? 'global-nav__list--open':'';

    return(
        <nav className={`global-nav ${className}`}>
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
            </ul>
        </nav>
    );
}
export default GlobalNav;