import React from "react";

require('./main.styl');

class Jury extends React.Component {
    render() {
        return (
            <div id="jury" className="jury content-container">
                <div className="textbox">
                    <h1>Jury Members</h1>
                </div>

                <div className="circle-image__container">

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/jury-head.png')}/>
                        <p className="image-text-name">CTO</p>
                        <p className="image-text-job">Leanest Startup in Berlin</p>
                        <p className="image-text-desc not-xs">  </p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/jury-head.png')}/>
                        <p className="image-text-name">PropTech Expert</p>
                        <p className="image-text-job">Real Estate and Partners</p>
                        <p className="image-text-desc not-xs">  </p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/jury-head.png')}/>
                        <p className="image-text-name">Venture Capitalist</p>
                        <p className="image-text-job">He will invest in the good stuff</p>
                        <p className="image-text-desc not-xs"></p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/jury-head.png')}/>
                        <p className="image-text-name">Tech Evangelist</p>
                        <p className="image-text-job">She knows everything and everyone</p>
                        <p className="image-text-desc not-xs"></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Jury;
