/** @jsx React.DOM */
var Table = React.createClass({displayName: "Table",
    render: function(){
        var rows = this.props.data.map(function (item) {
            return (
                React.createElement(Row, {rowObject: item, key: item.id})
            );
        });

        return (
            React.createElement("table", {className: "table table-striped table-bordered"}, 
                React.createElement("tbody", null, 
                rows
                )
            )
        );
    }
});

React.render(
    React.createElement(Table, {data: [{"id":1,"name":"Miranda Barlow", "sex":"F","role":"Captains' wife"},
    {"id":2,"name":"Charles Vane", "sex":"M","role":"Captain"},
    {"id":3,"name":"James Flint", "sex":"M","role":"Captain"}]}),
    document.getElementById('basic-view')
);

