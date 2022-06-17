import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { elearningApiCall } from "../../app/railsApi";
import { RootState } from "../../app/store";
import { User } from "../../app/components /authentication/SignupPage";

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

interface UserState {
  email: string;
  password: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  messageType: string;
}

const initialState: UserState = {
  email: "",
  password: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: "",
  messageType: "",
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
  },
});

export const userSelect = (state: RootState) => state.user;
export default userSlice.reducer;
