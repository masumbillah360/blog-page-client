import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import TodoRow from "./TodoRow";

const MyTodos = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data: todoTask = [], refetch } = useQuery({
    queryKey: ["todoTask", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/todos?email=${email}`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      All Todos will be here{todoTask.length}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Status</th>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoTask.map((todo, num) => (
              <TodoRow key={todo._id} todo={todo} num={num} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTodos;
