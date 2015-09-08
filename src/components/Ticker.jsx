
const React = require('react');

const TickerStore = require('../stores/TickerStore'),
      Header = require('./Header'),
      Controls = require('./Controls');

const Ticker = React.createClass({
    getInitialState: function () {
        return this._getTickerState();
    },

    componentDidMount: function () {
        TickerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TickerStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <Header count={this.state.allTicks.length} />
                <Controls isRunning={this.state.isRunning} />
            </div>
        );
    },

    _getTickerState: function () {
        return {
            allTicks: TickerStore.getAll(),
            isRunning: TickerStore.isRunning()
        };
    },

    _onChange: function () {
        this.setState(this._getTickerState());
    }
});

module.exports = Ticker;
