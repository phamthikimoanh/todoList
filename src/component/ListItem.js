import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.state = {};
  }
  onClickRemove() {
    var id = this.props.id;
    this.props.removeItem(id);
  }
  render() {
    //const value = this.props.valueInput;
    var items = this.props.items.map((item, i) => {
      return (
        <div
          className="row"
          key={i}
          style={{
            backgroundColor: "lightgray",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
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

    return (
      <div>
        <ul className="list-group pt-5 w-50 mx-auto">{items}</ul>
      </div>
    );
  }
}

export default ListItem;
