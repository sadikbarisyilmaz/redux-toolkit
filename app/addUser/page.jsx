"use client";
import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";
import { useRouter } from "next/navigation";

function AddUser() {
  const users = useSelector((state) => state.users.value);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: users.length + 1,
      name: "",
      email: "",
      phone: "",
    },
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addUser([data]));
    router.back();
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="mt-10 flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold mb-8  p-4 border rounded-lg">
          Add New User
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              {...register("name", { required: true })}
              id="name"
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              {...register("email", { required: true })}
              id="email"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone" />
            </div>
            <TextInput
              {...register("phone", { required: true })}
              id="phone"
              required
              type="number"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <Link href="/">
          <Button color="light">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default AddUser;
