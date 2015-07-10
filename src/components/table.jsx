/** @jsx React.DOM */
var Table = React.createClass({
    render: function(){
        var rows = this.props.data.map(function (item) {
            return (
                <Row rowObject={item} key={item.id} />
            );
        });

        return (
            <table className="table table-striped table-bordered">
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
});

React.render(
    <Table data={[{"id":1,"name":"Miranda Barlow", "sex":"F","role":"Captains' wife"},
    {"id":2,"name":"Charles Vane", "sex":"M","role":"Captain"},
    {"id":3,"name":"James Flint", "sex":"M","role":"Captain"}]}/>,
    document.getElementById('basic-view')
);

