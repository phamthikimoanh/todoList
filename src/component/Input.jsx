import React from "react";
import inputState from "./inputState";

const Input = ({ getValue }) => {
  const { reset, onChange, value } = inputState();
  console.log(value);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        getValue(value);
        reset();
      }}
    >
      <div className="form-group pt-5 w-50 mx-auto">
        <label>Thêm mới</label>
        <input
          type="text"
          className="form-control"
          placeholder="Thêm mới"
          onChange={onChange}
          value={value}
        />
        {/* <button
          onSubmit={event => {
            event.preventDefault();
            getValue(value);
            reset();
          }}
          className="btn btn-success mt-2"
        >
          Thêm
        </button> */}
      </div>
    </form>
  );
};

export default Input;

// import React, { Component } from "react";

// class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     var newValue = this.refs.valueItem.value;
//     if (newValue) {
//       this.props.addItem({ newValue });
//       this.refs.form.reset();
//     }
//   }
//   render() {
//     return (
//       <form ref="form" onSubmit={this.onSubmit}>
//         <div className="form-group pt-5 w-50 mx-auto">
//           <label htmlFor="exampleInputEmail1">Thêm mới</label>
//           <input
//             ref="valueItem"
//             type="text"
//             className="form-control"
//             placeholder="Add new"
//           />
//           <button type="submit" className="btn btn-success mt-2">
//             Thêm
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default Input;
