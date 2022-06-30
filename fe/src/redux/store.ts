import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import quizReducer from "../redux/quizSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
