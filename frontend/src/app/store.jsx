import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage" //? local storage
import storage from "redux-persist/lib/storage/session"; //? session storage
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";
import bottomCommentReducer from "../features/bottomCommentSlice";
import categoryReducer from "../features/categorySlice";
import commentReducer from "../features/commentSlice";
import contentReducer from "../features/contentSlice";
import userReducer from "../features/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReducer,
    bottomComment: bottomCommentReducer,
    category: categoryReducer,
    comment: commentReducer,
    content: contentReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
