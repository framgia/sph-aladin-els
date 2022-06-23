import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { elearningApiCall } from "../../app/utils/railsApi";
import { RootState } from "../../app/redux/store";
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
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

interface UserState {
  email: string;
  firstname: string;
  lastname: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  messageType: string;
  id: any;
  isSignedIn: boolean;
}

const initialState: UserState = {
  lastname: "",
  firstname: "",
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
      state.isSignedIn = false;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }: any) => {
      const { email, id, lastname, firstname } = payload.data;
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.id = id;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.message = payload.status.message;
      state.messageType = "success";
      state.isSignedIn = true;
      console.log(payload);
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      // set error message
      state.message = action.payload;
      state.messageType = "error";
      state.isSignedIn = false;
    });
  },
});

export const userSelect = (state: RootState) => state.user;
export default userSlice.reducer;
