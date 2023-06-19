"use client";

import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    deleteUser: (state, ID) => {
      state.value = state.value.filter(
        (user) => user.id !== Number.parseInt(ID.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.value.push(...action.payload);
    });
  },
});
export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
