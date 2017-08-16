import React from "react";
require('./main.styl');

class Organizers extends React.Component {
    render() {
        return (
            <div id="organizers" className="organizers content-container">
                <h1>Organizers</h1>
                <p className="small-para">
                    Why us, I don't know! We are all huge fans of Hackathons and want to share
                    the joy we had at other events. So we decided to host our own.
                    <br />
                    <br />
                    <a href="mailto:hello@proptechhacks.de">SEND US AN EMAIL</a>
                </p>

                <div className="circle-image__container">
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/jury-head.png')}/>
                        <p className="image-text-name">Anyon</p>
                        <p className="image-text-desc not-xs"></p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/jury-head.png')}/>
                        <p className="image-text-name">Hackerstolz</p>
                        <p className="image-text-desc not-xs"></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organizers;
