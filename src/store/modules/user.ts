import taxios from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserDetail = createAsyncThunk("user/data", async (phone) => {
  console.log(phone);

  const { data } = await taxios.get(`/view/userDetail/${phone}`);
  return data.res;
}) as any;

const useSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      phone: "",
      username: "",
      avatar: ".",
      user_rank: "",
      isFollowed: false,
    },
    article_num: 0,
    followed_num: 0,
    comment_num: 0,
    passages: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserDetail.fulfilled, (state, { payload }) => {
      Object.assign(state, payload);
    });
  },
});

export default useSlice.reducer;
