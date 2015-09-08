
const React = require('react');

const Header = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Random Events</h1>
                <p>Every 100 milliseconds, there is a 53% chance of an event occuring.</p>
            </div>
        )
    }
});

module.exports = Header;
