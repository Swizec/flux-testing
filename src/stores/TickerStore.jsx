
const _ = require('lodash'),
      EventEmitter = require('events').EventEmitter,
      TickerConstants = require('../constants/TickerConstants'),
      Dispatcher = require('../dispatcher');

const CHANGE_EVENT = 'change';

var _ticks = {};

function create() {
    var id = (+new Date() + _.random(0, 9999)).toString(36);
    _ticks[id] = {
        id: id,
        time: new Date()
    };
}

const TickerStore = _.extend(EventEmitter.prototype, {
    getAll: function () {
        return _ticks;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function (action) {

    switch (action.actionType) {
        case TickerConstants.TICK_CREATE:
            create();
            TickerStore.emitChange();
            break;
    }
});

module.exports = TickerStore;
