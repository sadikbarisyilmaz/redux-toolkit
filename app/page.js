"use client";
import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, fetchUsers } from "./features/users/usersSlice";
import ListUsers from "./ListUsers";
import Link from "next/link";
import { Button } from "flowbite-react";

export default function Home() {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  useEffect(() => {
    users[0] === undefined ? dispatch(fetchUsers()) : "";
    console.log(users);
  }, []);
  console.log(users);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 items-center max-w-screen-md">
          <h1 className="text-2xl font-bold text-center  p-4 border rounded-lg">
            List of Users
          </h1>
          {/* <button onClick={() => dispatch(fetchUsers())}>aaa</button> */}
          <Link href="/addUser">
            <Button color="light">Add User</Button>
          </Link>
          <ListUsers />
        </div>
      </div>
    </div>
  );
}
