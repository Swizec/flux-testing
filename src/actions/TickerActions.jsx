
const Dispatcher = require('../dispatcher'),
      TickerConstants = require('../constants/TickerConstants');

var TickerActions = {
    create: function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE
        });
    }
};

module.exports = TickerActions;
