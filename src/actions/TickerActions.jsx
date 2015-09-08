
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
    }
};

module.exports = TickerActions;
