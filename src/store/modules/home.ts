import taxios from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Ipassgae {
  passageid: string;
  authorPhone: string;
  title: string;
  content: string;
  description: string;
  recommend: number;
  created_at: string;
  updated_at: string;
  avatar: string;
  username: string;
}

export interface IHomeData {
  code: string;
  res: {
    bannerimgs: string[];
    passageRaking: {
      passageid: string;
      title: string;
      recommend: number;
    }[];
    loaer: {
      username: string;
      user_rank: string;
      avatar: string;
      passagenum: number;
      recommends: string;
    }[];
    finePassage: {
      passageid: string;
      authorPhone: string;
      title: string;
    }[];
    passageRecommend: {
      passageid: string;
      authorPhone: string;
      title: string;
      content: string;
      description: string;
      recommend: number;
      created_at: string;
      updated_at: string;
    }[];
  };
}

export const fetchHomeData = createAsyncThunk(
  "home/data",
  async (description) => {
    const { data } = await taxios.get(`/view/homedata/${description}`);
    return data.res;
  }
) as any;

const homeSlice = createSlice({
  name: "home",
  initialState: {
    bannerimgs: new Array(),
    passageRaking: new Array(),
    loaer: new Array(),
    finePassage: new Array(),
    passageRecommend: new Array(),
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
      const stateKeys = Object.keys(state);
      for (const key of stateKeys) {
        (state as any)[key].length = 0;
        (state as any)[key].push(...payload[key]);
      }
    });
  },
});

export default homeSlice.reducer;
