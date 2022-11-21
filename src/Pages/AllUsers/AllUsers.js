import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Components/Spinner/Spinner";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-xl text-primary">
          All User : {allUsers.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, num) => (
              <UsersRow key={user._id} user={user} num={num} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
