import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    //this.onClickDone = this.onClickDone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {
  //   this.refs.valueItem.focus();
  // }
  onSubmit(event) {
    event.preventDefault();
    var newValue = this.refs.valueItem.value;
    //console.log(newValue);
    if (newValue) {
      this.props.addItem({ newValue });
      this.refs.form.reset();
    }
  }
  render() {
    //console.log(this.state.valueInput);

    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <div className="form-group pt-5 w-50 mx-auto">
          <label htmlFor="exampleInputEmail1">Thêm mới</label>
          <input
            ref="valueItem"
            type="text"
            className="form-control"
            placeholder="Add new"
          />
          <button type="submit" className="btn btn-success mt-2">
            Thêm
          </button>
        </div>
      </form>
    );
  }
}

export default Input;
