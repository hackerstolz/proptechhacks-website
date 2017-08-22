import React from "react";
require('./main.styl');

class Organizers extends React.Component {
    render() {
        return (
            <div id="organizers" className="sponsors content-container">
                <h1>Organizers</h1>
                <p className="small-para">
                    Why us, I dont know! We are all huge fans of Hackathons and want to share
                    the joy we had at other events. So we decided to host our own.
                    <br />
                    <br />
                    <a href="mailto:hello@proptechhacks.de">SEND US AN EMAIL</a>
                </p>
                <div className="sponsor-logos">
                  <div className="full-image__container">
                          <a href="https://www.anyon.com" target="_blank">
                              <div className="full-image-wrap">
                                  <img className="full-image"
                                       style={{"height": "80px"}}
                                       src={require('./pictures/anyon-logo-white.png')}/>
                              </div>
                          </a>
                  </div>
                  <div className="full-image__container">
                          <a href="https://www.hackerstolz.de" target="_blank">
                              <div className="full-image-wrap">
                                  <img className="full-image"
                                       style={{"height": "80px"}}
                                       src={require('./pictures/hackerstolz.svg')}/>
                              </div>
                          </a>
                  </div>
                </div>


            </div>
        );
    }
}

export default Organizers;
