import './Footer.css';
import footerMenu1 from "./footerMenu1.js";
import footerMenu2 from "./footerMenu2.js";
import footerMenu3 from "./footerMenu3.js";

const list1 = footerMenu1.map( item => {
    return ( <li className="footer__item" key={item.name}>
                <a className="footer__link" href={item.path}> 
                    {item.name} 
                </a>
            </li>
            );         
});

const list2 = footerMenu2.map( item => {
    return ( <li className="footer__item" key={item.name}>
                <a className="footer__link" href={item.path}> 
                    {item.name} 
                </a>
            </li>
            );         
});

const list3 = footerMenu3.map( item => {
    return ( <li className="footer__item" key={item.name}>
                <a className="footer__link" href={item.path}> 
                    {item.name} 
                </a>
            </li>
            );         
});


function Footer() {
    return(
        <footer className='footer'>
            <ul className="footer__list footer__chinese"> 
                { list1 }
            </ul>
            <ul className="footer__list footer__international"> 
                { list2 }
            </ul>
            <ul className="footer__list footer__go"> 
                { list3 }
            </ul>
        </footer>
    );
}
export default Footer;
