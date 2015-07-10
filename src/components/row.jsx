/** @jsx React.DOM */
var Row = React.createClass({
    render: function(){

        var item = this.props.rowObject;
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.role}</td>
            </tr>
        );
    }
});
