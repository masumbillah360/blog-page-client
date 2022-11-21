import React from "react";

const UsersRow = ({ user, num }) => {
  console.log(user);
  return (
    <>
      <tr className="hover">
        <th>
          <img
            src={user.userThumbnail}
            alt=""
            className="h-10 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          />
        </th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          {user?.role} <br />
          {(user?.role === "Member" && (
            <button className="btn btn-xs btn-primary">Make Modarator</button>
          )) ||
            (user?.role === "Modarator" && (
              <button className="btn btn-xs btn-primary">Make Admin</button>
            ))}
        </td>
      </tr>
    </>
  );
};

export default UsersRow;
