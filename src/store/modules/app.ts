import taxios from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("app/fetchUser", async () => {
  const { data } = await taxios.get("/user/verifyUser");
  return data.user;
});

const userSlice = createSlice({
  name: "app",
  initialState: {
    user: {},
  },
  reducers: {
    changeUser: (state, { payload }) => {
      Object.assign(state.user, payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      Object.assign(state.user, action.payload);
    });
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
