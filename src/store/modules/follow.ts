import taxios from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFollowData = createAsyncThunk("follow/data", async () => {
  const { data } = await taxios.get("/follow/getList");
  return data;
});

const followSlice = createSlice({
  name: "follow",
  initialState: {
    followed: new Array(),
    fans: new Array(),
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFollowData.fulfilled, (state, { payload }) => {
      state.followed.length = 0;
      state.fans.length = 0;
      state.followed.push(...payload.followed);
      state.fans.push(...payload.fans);
    });
  },
});

export default followSlice.reducer;
