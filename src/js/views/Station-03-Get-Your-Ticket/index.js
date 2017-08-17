import React from 'react';

require('./main.styl');

class GetYourTicket extends React.Component {
    render() {
        return (
            <div id="get-your-ticket" className="content-container get-your-ticket">
                <div className="textbox">
                    <h1>Get your ticket now!</h1>
                    <br />
                    <p>Talk to evenbrite at the counter. Please note that you get 10€ cashback at the event!</p>
                </div>

                <a href="//www.eventbrite.com/e/proptechhacks-tickets-36886966911#tickets" target="_blank">
                    <div className="small-button">Go to Eventbrite</div>
                </a>

                <div className="eventbrite-loading">Loading...</div>


                <iframe src="//eventbrite.co.uk/tickets-external?eid=36886966911&ref=etckt"
                        frameBorder="1"
                        marginHeight="5"
                        marginWidth="5"
                        scrolling="auto"
                        allowTransparency="true">
                </iframe>
            </div>

        )
    }
}

export default GetYourTicket;
