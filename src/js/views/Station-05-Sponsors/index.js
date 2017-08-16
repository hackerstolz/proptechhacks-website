import React from "react";

require('./main.styl');


class Sponsors extends React.Component {
    render() {
        return (
            <div id="sponsors" className="sponsors content-container">
                <div className="textbox">
                    <h1>Check out our fantastic sponsors!</h1>
                </div>
                <div className="sponsor-logos">
                </div>
            </div>
        );
    }
}

export default Sponsors;
