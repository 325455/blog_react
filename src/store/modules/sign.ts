import { getRandom } from "@/utils/getRandom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const signSlice = createSlice({
  name: "sign",
  initialState: {
    contentTrans: 0,
    signUpForm: new Array(4).fill(""),
    signInForm: new Array(3).fill(""),
    signUpImgCode: getRandom(4),
    signInImgCode: getRandom(4),
  },
  reducers: {
    changeContentTrans(state, { payload }) {
      state.contentTrans = payload;
    },
    changeSignUpForms(state, action: PayloadAction<any[]>) {
      state.signUpForm.splice(0, 4, ...action.payload);
    },
    changeSignInforms(state, action: PayloadAction<any[]>) {
      state.signInForm.splice(0, 3, ...action.payload);
    },
    changSignUpImgCode(state, { payload }) {
      state.signUpImgCode = payload;
    },
    changSignInImgCode(state, { payload }) {
      state.signInImgCode = payload;
    },
  },
});

export default signSlice.reducer;
export const {
  changeContentTrans,
  changeSignInforms,
  changeSignUpForms,
  changSignInImgCode,
  changSignUpImgCode,
} = signSlice.actions;
