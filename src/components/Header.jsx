
const React = require('react');

const Header = React.createClass({
    render: function () {
        return (
            <h1>{this.props.count} Random Events</h1>
        )
    }
});

module.exports = Header;
