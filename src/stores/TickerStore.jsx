
const _ = require('lodash'),
      EventEmitter = require('events').EventEmitter,
      TickerConstants = require('../constants/TickerConstants'),
      Dispatcher = require('../dispatcher');

const CHANGE_EVENT = 'change';

var _ticks = {},
    _ticker_interval;

function create() {
    var id = (+new Date() + _.random(0, 9999)).toString(36);
    _ticks[id] = {
        id: id,
        time: new Date()
    };
}

function start_ticker() {
    _ticker_interval = setInterval(create, 100);
}

function stop_ticker() {
    _ticker_interval = clearInterval(_ticker_interval);
}

const TickerStore = _.extend(EventEmitter.prototype, {
    getAll: function () {
        return _ticks;
    },

    isRunning: function () {
        return !!_ticker_interval;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function (action) {

    switch (action.actionType) {
        case TickerConstants.TICK_CREATE:
            create();
            TickerStore.emitChange();
            break;

        case TickerConstants.TICK_START:
            start_ticker();
            TickerStore.emitChange();
            break

        case TickerConstants.TICK_STOP:
            stop_ticker();
            TickerStore.emitChange();
            break

        default:
            // no op
    }
});

module.exports = TickerStore;
