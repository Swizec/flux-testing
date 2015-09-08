
const React = require('react'),
      TickerActions = require('../actions/TickerActions');

const Controls = React.createClass({
    render: function () {
        if (this.props.isRunning) {
            return (
                <button onClick={TickerActions.stop} className="btn btn-danger">Stop</button>
            );
        }else{
            return (
                <button onClick={TickerActions.start} className="btn btn-success">Start</button>
            );
        }
    }
});

module.exports = Controls;
