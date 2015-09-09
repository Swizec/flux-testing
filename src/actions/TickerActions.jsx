
const Dispatcher = require('../dispatcher'),
      TickerConstants = require('../constants/TickerConstants');

var TickerActions = {
    create_event: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE_EVENT
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
    },

    tick: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK
        });
    }
};

module.exports = TickerActions;
