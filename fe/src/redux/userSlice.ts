import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { elearningApiCall } from "../utils/railsApi";
import { User } from "../pages/SignUp";

export const registerUser = createAsyncThunk(
  "user/register_user",
  async (data: User, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await elearningApiCall.post("/signup", {
        user: {
          email: data.email,
          password: data.password,
        },
      });
      return fulfillWithValue(res.data.status.message);
    } catch (err: any) {
      return rejectWithValue(err.response.data.status.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login_user",
  async (data: User, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await elearningApiCall.post("/login", {
        user: {
          email: data.email,
          password: data.password,
        },
      });
      return fulfillWithValue(res.data);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

interface UserState {
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  messageType: string;
  id: any;
  isSignedIn: boolean;
}

const initialState: UserState = {
  email: "",
  id: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: "",
  messageType: "",
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }: any) => {
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.message = payload;
      state.messageType = "success";
    });

    builder.addCase(registerUser.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }: any) => {
      const { email, id } = payload.data;
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.id = id;
      state.email = email;
      state.message = payload.status.message;
      state.messageType = "success";
      state.isSignedIn = true;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
    });
  },
});

export const userSelect = (state: RootState) => state.user;
export default userSlice.reducer;
