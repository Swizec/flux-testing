
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
            actionType: TickerConstants.TICK_CREATE_EVENT
        });

        var all = TickerStore.getAll(),
            keys = Object.keys(all);

        keys.should.have.length(1);

        var last = all[keys[0]];

        last.should.have.time;
        last.should.have.id;
        last.id.should.equal(keys[0]);
    });

    it('emits change on create', function () {
        var spy = sinon.spy();
        TickerStore.on('change', spy);

        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_CREATE_EVENT
        });

        spy.should.have.been.calledOnce;
    });

    it('emits change on tick', function () {
        var spy = sinon.spy();
        TickerStore.on('change', spy);

        Dispatcher.dispatch({
            actionType: TickerConstants.TICK
        });

        spy.should.have.been.calledOnce;
    });

    it('adds change listener', function () {
        var spy = sinon.spy();
        TickerStore.addChangeListener(spy);

        TickerStore.emit('change');

        spy.should.have.been.calledOnce;
    });

    it('removes change listener', function () {
        var spy = sinon.spy();
        TickerStore.addChangeListener(spy);
        TickerStore.removeChangeListener(spy);

        TickerStore.emit('change');

        spy.should.not.have.been.called;
    });

    it('can start', function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_START
        });

        TickerStore.isRunning().should.be.true;
    });

    it('can stop', function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_STOP
        });

        TickerStore.isRunning().should.be.false;
    });

    it('sets window size', function () {
        Dispatcher.dispatch({
            actionType: TickerConstants.TICK_SET_WINDOW,
            size: 100
        });

        TickerStore.getWindow().should.equal(100);
    });
});
