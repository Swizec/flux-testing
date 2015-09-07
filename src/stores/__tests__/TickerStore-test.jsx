
describe('TickerStore', function () {
    var TickerConstants = require('../../constants/TickerConstants');
    var TickerStore,
        Dispatcher,
        callback;

    before(function () {
        Dispatcher = require('../../dispatcher');
        sinon.spy(Dispatcher, 'register');

        TickerStore = require('../TickerStore');
    });

    it('should exist', function () {
        TickerStore.should.be.an.object;
    });

    it('registers a callback with the dispatcher', function () {
       Dispatcher.register.should.have.been.calledOnce;
    });

    it('should initialize without ticks', function () {
        var all = TickerStore.getAll();

        all.should.be.empty;
    });

    it('creates a tick', function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE
        });

        var all = TickerStore.getAll(),
            keys = Object.keys(all);

        keys.should.have.length(1);
    });

    it('emits change on create', function () {
        var spy = sinon.spy();
        TickerStore.on('change', spy);

        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE
        });

        spy.should.have.been.calledOnce;
    });
});
