import React, { Component } from "react";

class Fillter extends Component {
  constructor(props) {
    super(props);
    this.removeActive = this.removeActive.bind(this);
    //this.showActive = this.showActive.bind(this);
    this.state = {};
  }
  removeActive() {
    console.log(this.props.data);

    // for (var i = this.state.activeItems.length - 1; i >= 0; i--)
    //   this.todoItems.splice(this.activeItems[i], 1);
  }
  render() {
    return (
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-danger mr-2" onClick={this.removeActive}>
          Xóa active
        </button>
        <button className="btn btn-default ml-2" onClick={this.showActive}>
          Active
        </button>
      </div>
    );
  }
}

export default Fillter;
