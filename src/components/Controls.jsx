
const React = require('react'),
      TickerActions = require('../actions/TickerActions');

const Controls = React.createClass({
    _button: function () {
        if (this.props.isRunning) {
            return (
                <button onClick={TickerActions.stop} className="btn btn-danger">Stop</button>
            );
        }else{
            return (
                <button onClick={TickerActions.start} className="btn btn-success">Start</button>
            );
        }
    },

    windowChange: function (event) {
        TickerActions.setWindow(event.target.value*1000);
    },

    render: function () {
        return (
            <div>
                See&nbsp;
                <input type="number" value={this.props.window/1000} onChange={this.windowChange} />
                &nbsp;seconds of events
                <br />
                {this._button()}
            </div>
        );
    },
});

module.exports = Controls;
