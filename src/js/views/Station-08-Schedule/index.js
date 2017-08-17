import React from 'react';

require('./main.styl');

const fridayItems = [
    ['19:30', 'Hello by Anyon'],
    ['19:35', 'Get Together & Drinks']
];

const saturdayItems = [
  ['09:00', 'Registration and Breakfast'],
  ['09:30', 'Kick Off and Welcome'],
  ['10:00', 'Start Hacking'],
  ['13:00', 'Yummy Lunch'],
  ['19:00', 'Dinner'],
  ['22:00', 'Night Hacking'],
  ['24:00', 'Late Night Snack']
];

const sundayItems = [
    ['09:30', 'Breakfast'],
    ['10:00', 'Coding Finale'],
    ['12:00', 'DEADLINE'],
    ['12:30', 'Pitches'],
    ['13:30', 'Lunch'],
    ['14:30', 'Award Ceremony']
];


class Schedule extends React.Component {

    scheduleItem(time, text, key) {
        return (
            <div key={key} className="schedule-item">
                <span className="schedule-item__time">{time}</span><br/>
                <span className="schedule-item__text" dangerouslySetInnerHTML={{__html: text}}></span>
            </div>
        )
    }

    scheduleItems(items) {
        return items.map((data, i) => this.scheduleItem(data[0], data[1], i))
    }

    render() {
        return (
            <div id="schedule" className="content-container schedule">
                <div className="textbox">
                    <h1>Schedule</h1>
                </div>
                <div className="schedule-container">
                    <div className="schedule-column">
                        <h4>FRIDAY<br/>02.12.2016</h4>
                        {this.scheduleItems(fridayItems)}
                    </div>
                    <div className="schedule-column">
                        <h4>SATURDAY<br/>03.12.2016</h4>
                        {this.scheduleItems(saturdayItems)}
                    </div>
                    <div className="schedule-column">
                        <h4>SUNDAY<br/>04.12.2016</h4>
                        {this.scheduleItems(sundayItems)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;
