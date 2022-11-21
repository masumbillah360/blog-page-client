import React from "react";

const TodoRow = ({ todo }) => {
  const { todoName, description } = todo;
  console.log(todo);
  return (
    <>
      <tr className="hover">
        <td>
          <input type="checkbox" name="" value="" />
        </td>
        <td>{todoName}</td>
        <td>{description}</td>
        <td>
          <button className="btn btn-xs btn-warning mr-2">Del</button>
          <button className="btn btn-xs btn-primary">Update</button>
        </td>
      </tr>
    </>
  );
};

export default TodoRow;
