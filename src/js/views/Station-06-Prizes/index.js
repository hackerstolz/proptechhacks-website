import React from "react";

require('./main.styl');

class Prizes extends React.Component {
    render() {
        return (
            <div id="prizes" className="prizes content-container">

                <h1>Awesome Prizes</h1>

                <div className="circle-image__container">
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize1.svg')}/>
                        <p className="image-text">Best propTech Hack and Goodies</p>
                        <p className="image-text--line2">500 EUR and Goodies</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize1.svg')}/>
                        <p className="image-text">Hackers Favorite</p>
                        <p className="image-text--line2">500 EUR and Goodies</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize1.svg')}/>
                        <p className="image-text">VCs Dream</p>
                        <p className="image-text--line2">500 EUR and Goodies</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Prizes;
