import React from "react";
import {Link} from "react-scroll";
require('./main.styl');

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer wide content-container">
                <div className="footer__row">
                    <div className="footer__column col1">
                        <img src={require('./images/mobility-hacks-ci-logo.svg')}/>
                    </div>
                    <div className="footer__column col2 col-with-text not-xs">
                        <h1>sitemap</h1>
                        <div className="footer__list">
                            <Link spy={true} smooth={true} to="home">Home</Link>
                            <Link spy={true} smooth={true} to="get-your-ticket">Tickets</Link>
                            <Link spy={true} smooth={true} to="why-mobility">Why Mobility</Link>
                            <Link spy={true} smooth={true} to="sponsors">Sponsors</Link>
                            <Link spy={true} smooth={true} to="prizes">Prizes</Link>
                            <Link spy={true} smooth={true} to="prizes">Jury</Link>
                            <Link spy={true} smooth={true} to="schedule">Schedule</Link>
                            <Link spy={true} smooth={true} to="faq">FAQ</Link>
                            <Link spy={true} smooth={true} to="faq">Organizers</Link>
                            <a href="http://www.hackerstolz.de/impressum/">Impressum</a>
                        </div>
                    </div>
                    <div className="footer__column col3 col-with-text not-xs">
                        <h1>partners</h1>
                        <div className="footer__list">
                            <a href="http://www.anyon.com" target="_blank">Anyon</a>
                            <a href="https://www.hackerstolz.de" target="_blank">Hackerstolz e.V.</a>
                        </div>
                    </div>
                    <div className="footer__column col4 col-with-text not-xs">
                        <h1>initiators</h1>
                        <div className="footer__list">
                            <a href="http://www.hackerstolz.de" target="_blank">HackerStolz e.V.</a>
                            <a href="mailto:info@hackerstolz.de">info@hackerstolz.de</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="footer__second-row">
                        <h1>Join us for the first PropTech Hacks in Berlin on sept 23 - 24 and create awesome hacks to lead real estate in the right direction.</h1>
                    </div>
                </div>
                <div className="only-xs">
                    <div className="footer__third-row">
                        <div className="footer__list">
                            <a href="http://www.hackerstolz.de" className="left" target="_blank">HackerStolz e.V.</a>
                            <a href="mailto:info@hackerstolz.de" className="right">info@hackerstolz.de</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
