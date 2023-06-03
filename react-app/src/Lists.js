import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
  let listrows = [];
  props.alldata.forEach((element) => {
    listrows.push(
      <tr key={element.title}>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td>
          <UpdateList
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          ></UpdateList>
        </td>
        <td>
          <DeleteList
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          ></DeleteList>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
}

export default Lists;
