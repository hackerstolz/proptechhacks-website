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
                        <img className="circle-image" src={require('./jury/iris_broese_bw.png')}/>
                        <p className="image-text-name">Iris Bröse</p>
                        <p className="image-text-job">Project Manager Startups Bitkom e.v. </p>
                        <p className="image-text-desc not-xs">  </p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/christian_boehlke_bw.png')}/>
                        <p className="image-text-name">Christian Böhlke</p>
                        <p className="image-text-job">CTO Anyon</p>
                        <p className="image-text-desc not-xs">  </p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/lukas_bw.png')}/>
                        <p className="image-text-name">Lukasz Wojtusiak</p>
                        <p className="image-text-job">Lead Product Manager Minodes</p>
                        <p className="image-text-desc not-xs"></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Jury;
