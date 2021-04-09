import React from 'react';
import NavigationItem from "../../components/Navigation/NavigationItem";
import './footer.css';

const Footer = () => (
    <div className="footer" id="footer-section">
        <div className="container gy-footer">
            <div className="sub-footer-list">
                <NavigationItem link='/about'>ABOUT GY</NavigationItem>&nbsp; | <NavigationItem link="/properties"> PROPERTIES</NavigationItem>
            </div>
            <div className="copyright">
                © GY Agencies 2021
            </div>
        </div>

    </div>
);
export default Footer;