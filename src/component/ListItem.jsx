import React from "react";

const ListItem = ({ todos, onClickCheck, deleteTodo }) => {
  console.log(todos[0]);

  const Items = todos.map((item, i) => (
    <li
      className="row"
      key={i}
      style={item.done === true ? done : undone}
    >
      <div className="col-sm-10">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={() => {
              onClickCheck(i);
            }}
          />
          <label className="form-check-label" htmlFor="gridRadios1">
            {item}
          </label>
        </div>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-warning"
          type="button"
          onClick={() => {
            deleteTodo(i);
          }}
        >
          Xóa
        </button>
      </div>
    </li>
  ));
  
  return (
    <div>
      <ul className="list-group pt-5 w-50 mx-auto">{Items}</ul>
    </div>
  );
};

export default ListItem;
const done = {
  backgroundColor: "#fdc7c7",
  alignItems: "center",
  marginBottom: 10,
  color: "green"
};
const undone = {
  backgroundColor: "lightgray",
  alignItems: "center",
  marginBottom: 10,
  color: "#444"
};
////
// import React, { Component } from "react";

// class ListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.onClickRemove = this.onClickRemove.bind(this);
//     this.onClickCheck = this.onClickCheck.bind(this);
//   }

//   onClickCheck(item) {
//     var id = item.id;
//     this.props.markTodoDone(id);
//   }
//   onClickRemove() {
//     var id = this.props.id;
//     this.props.removeItem(id);
//   }
//   render() {
//     var items = this.props.items.map((item, i) => {
//       return (
//         <li className="row" key={i} style={item.done === true ? done : undone}>
//           <div className="col-sm-10">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 onClick={() => this.onClickCheck(item)}
//               />
//               <label className="form-check-label" htmlFor="gridRadios1">
//                 {item.title}
//               </label>
//             </div>
//           </div>
//           <div className="col-sm-2">
//             <button
//               className="btn btn-warning"
//               type="button"
//               onClick={this.onClickRemove}
//             >
//               Xóa
//             </button>
//           </div>
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul className="list-group pt-5 w-50 mx-auto">{items}</ul>
//       </div>
//     );
//   }
// }

// export default ListItem;
// const done = {
//   backgroundColor: "#fdc7c7",
//   alignItems: "center",
//   marginBottom: 10,
//   color: "green"
// };
// const undone = {
//   backgroundColor: "lightgray",
//   alignItems: "center",
//   marginBottom: 10,
//   color: "#444"
// };
