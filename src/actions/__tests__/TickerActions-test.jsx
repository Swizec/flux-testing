
describe('TickerActions', function () {
    var TickerConstants = require('../../constants/TickerConstants');
    var TickerActions = require('../TickerActions');
    var Dispatcher = require('../../dispatcher');

    before(function () {
        sinon.spy(Dispatcher, 'dispatch');
    });

    it('can create', function () {
        TickerActions.create();

        Dispatcher.dispatch.should.have.been.calledWith({
            actionType: TickerConstants.TICK_CREATE
        });
    });

    it('can start', function () {
        TickerActions.start();

        Dispatcher.dispatch.should.have.been.calledWith({
            actionType: TickerConstants.TICK_START
        });
    });

    it('can stop', function () {
        TickerActions.stop();

        Dispatcher.dispatch.should.have.been.calledWith({
            actionType: TickerConstants.TICK_STOP
        });
    });

    it('can change window size', function () {
        TickerActions.setWindow(100);

        Dispatcher.dispatch.should.have.been.calledWith({
            actionType: TickerConstants.TICK_SET_WINDOW,
            size: 100
        });
    });
});
