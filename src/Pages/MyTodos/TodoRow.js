import React, { useState } from "react";

const TodoRow = ({ todo, refetch }) => {
  const [status, setStatus] = useState(false);
  const { todoName, description, _id } = todo;
  const handleStatus = (e) => {
    setStatus(!status);
    console.log(status);
  };
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Do you want to delete this?");
    if (confirm) {
      fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <tr
        className={`hover ${
          status
            ? "bg-red-400 line-through text-zinc-500 italic decoration-green-800 decoration-2"
            : ""
        }`}
      >
        <td>
          <input type="checkbox" name="" onChange={handleStatus} />
        </td>
        <td>{todoName}</td>
        <td>{description}</td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-warning mr-2"
          >
            Del
          </button>
          <button className="btn btn-xs btn-primary">Edit</button>
        </td>
      </tr>
    </>
  );
};

export default TodoRow;
