import React from "react";
require('./main.styl');

class StayAway extends React.Component {
    render() {
        return (
            <div className="stayaway-container">
                <div className="stayaway-item">
                    <img src={require('./img/mario.svg')}/>
                    <div className="stayaway-desc">Boring Mario Kart Championship</div>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/beer.svg')}/>
                    <div className="stayaway-desc">Supported by Hackerstolz</div>
                </div>
                <div className="stayaway-item" id="specialitem">
                    <img id="line1" src={require('./img/line.svg')}/>
                    <div className="special">Reasons to stay away</div>
                    <img id="line2" src={require('./img/line.svg')}/>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/beer.svg')}/>
                    <div className="stayaway-desc">Beer
                    </div>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/prize.svg')}/>
                    <div className="stayaway-desc">Nice Prizes
                    </div>
                </div>
            </div>
        );
    }
}

export default StayAway;
