import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickCheck = this.onClickCheck.bind(this);
    this.state = { done: false };
  }
  onClickCheck() {
    var id = parseInt(this.props.id);
    this.props.markTodoDone(id);
    // this.setState({
    //   done: true
    // });
  }
  onClickRemove() {
    var id = this.props.id;
    this.props.removeItem(id);
  }
  render() {
    var items = this.props.items.map((item, i) => {
      return (
        <div
          className={
            "row" + item.done && item.done === true ? "done" : "undone"
          }
          key={i}
          style={undone}
        >
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={this.onClickCheck}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                {item.title}
              </label>
            </div>
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-warning"
              type="button"
              onClick={this.onClickRemove}
            >
              Xóa
            </button>
          </div>
        </div>
      );
    });
    //console.log(items[0]);

    return (
      <div>
        <ul className="list-group pt-5 w-50 mx-auto">{items}</ul>
      </div>
    );
  }
}

export default ListItem;
const done = {
  backgroundColor: "lightgray",
  alignItems: "center",
  marginBottom: 10
};
const undone = {
  backgroundColor: "lightgray",
  alignItems: "center",
  marginBottom: 10,
  color: "green"
};
