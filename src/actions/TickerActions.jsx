
const Dispatcher = require('../dispatcher'),
      TickerConstants = require('../constants/TickerConstants');

var TickerActions = {
    create: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE
        });
    },

    start: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_START
        });
    },

    stop: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_STOP
        });
    },

    setWindow: function (size) {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_SET_WINDOW,
            size: size
        });
    }
};

module.exports = TickerActions;
