
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
});
