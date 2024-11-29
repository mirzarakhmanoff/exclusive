import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter-slice";
import { api } from "./api";
import authSlice from "./slice/register-state";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    authSlice: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
