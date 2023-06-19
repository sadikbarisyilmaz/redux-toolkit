import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "flowbite-react";
import { Spinner, Button } from "flowbite-react";
import { deleteUser } from "./features/users/usersSlice";
function ListUsers() {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div className="grid w-3/6 gap-4">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users[0] !== undefined &&
            users.map((user, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell>
                    <button
                      className="border-2 p-2 rounded-lg"
                      id={user.id}
                      onClick={(e) => dispatch(deleteUser(e.target.id))}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      {users[0] === undefined && (
        <div className="flex justify-center">
          <Spinner aria-label="Default status example" size="xl" />
        </div>
      )}
    </div>
  );
}

export default ListUsers;
