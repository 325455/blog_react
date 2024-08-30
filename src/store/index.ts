import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./modules/app";
import signReducer from "./modules/sign";
import homeReducer from "./modules/home";
import followReducer from "./modules/follow";
import userReducer from "./modules/user";

const store = configureStore({
  reducer: {
    app: appReducer,
    sign: signReducer,
    home: homeReducer,
    follow: followReducer,
    user: userReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export default store;
