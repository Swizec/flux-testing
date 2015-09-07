
describe('dispatcher', function () {
    it('should be a Dispatcher', function () {
        var dispatcher = require('../index.jsx');

        dispatcher.should.be.an.instanceof(require('flux').Dispatcher);
    });
});
