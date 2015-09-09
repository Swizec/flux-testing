
const _ = require('lodash'),
      EventEmitter = require('events').EventEmitter,
      TickerConstants = require('../constants/TickerConstants'),
      Dispatcher = require('../dispatcher'),
      TickerActions = require('../actions/TickerActions');

const CHANGE_EVENT = 'change';

var _ticks = {},
    _ticker_interval,
    _window_size = 2000;

function create() {
    var id = (+new Date() + _.random(0, 9999)).toString(36);
    _ticks[id] = {
        id: id,
        time: new Date()
    };
}

function start_ticker() {
    if (_ticker_interval) return;
    _ticker_interval = true;

    var _tick =function tick () {
        if (_ticker_interval) {
            if (_.random(0, 30) > 26) {
                TickerActions.create_event();
            }else{
                TickerActions.tick();
            }

            window.requestAnimationFrame(_tick);
        }
    };

    window.requestAnimationFrame(_tick);
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

    getWindow: function () {
        return _window_size;
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
        case TickerConstants.TICK:
            TickerStore.emitChange();
            break

        case TickerConstants.TICK_CREATE_EVENT:
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

        case TickerConstants.TICK_SET_WINDOW:
            _window_size = action.size;
            TickerStore.emitChange();
            break

        default:
            // no op
    }
});

module.exports = TickerStore;
