import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { elearningApiCall } from "../utils/railsApi";
import { User } from "../pages/Login";

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
      console.log(res);
      return fulfillWithValue(res.data);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgot_password",
  async (data: User, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await elearningApiCall.post("/password/forgot", {
        email: data,
      });
      return fulfillWithValue(res.data);
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/reset_password",
  async (data: User, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await elearningApiCall.post("/password/reset", {
        email: data.email,
        token: data.token,
        password: data.password,
      });
      return fulfillWithValue(res.data.alert);
    } catch (err: any) {
      return rejectWithValue(err.response.data.error[0]);
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
      state.isSignedIn = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }: any) => {
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.id = payload?.dataid;
      state.email = payload?.data?.email;
      console.log(payload);
      state.message = payload.status?.message;
      state.messageType = "success";
      state.isSignedIn = true;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
    });
    builder.addCase(forgotPassword.fulfilled, (state, { payload }: any) => {
      // set success message
      state.isSuccess = true;
      state.message = "Email successfully sent please check your email";
      state.messageType = "success";
      state.isFetching = false;
    });

    builder.addCase(forgotPassword.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
      state.isFetching = false;
    });

    builder.addCase(forgotPassword.pending, (state, action: any) => {
      // set error message
      state.isFetching = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action: any) => {
      // set error message
      console.log(action);
      state.message = action.payload;
      state.messageType = "success";
      state.isSuccess = true;
    });
    builder.addCase(resetPassword.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
      state.isSuccess = false;
    });
  },
});

export const userSelect = (state: RootState) => state.user;
export default userSlice.reducer;
