/** @jsx React.DOM */
var Row = React.createClass({displayName: "Row",
    render: function(){

        var item = this.props.rowObject;
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, item.name), 
                React.createElement("td", null, item.sex), 
                React.createElement("td", null, item.role)
            )
        );
    }
});
