
const React = require('react');

const TickerStore = require('../stores/TickerStore'),
      Header = require('./Header'),
      Controls = require('./Controls'),
      HorizontalDrops = require('./HorizontalDrops');

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
                <Header />
                <HorizontalDrops ticks={this.state.allTicks}
                                 window={this.state.window} />
                <Controls isRunning={this.state.isRunning}
                          window={this.state.window} />
            </div>
        );
    },

    _getTickerState: function () {
        return {
            allTicks: TickerStore.getAll(),
            isRunning: TickerStore.isRunning(),
            window: TickerStore.getWindow()
        };
    },

    _onChange: function () {
        this.setState(this._getTickerState());
    }
});

module.exports = Ticker;
