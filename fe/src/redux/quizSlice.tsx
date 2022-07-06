import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { elearningApiCall } from "../utils/railsApi";
import { StringMappingType } from "typescript";

export const getQuizzes = createAsyncThunk(
  "quiz/get_quizzes",
  async (token: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await elearningApiCall.get("/quizzes", {
        headers: {
          Authorization: token,
        },
      });
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

interface QuizParams {
  token: string;
  description: string;
  title: string;
}

interface QuizAddParams {
  id: number;
  description: string;
  title: string;
}

export const addQuiz = createAsyncThunk(
  "quiz/add_quiz",
  async (data: QuizParams, { rejectWithValue, fulfillWithValue }) => {
    const { token, title, description } = data;
    try {
      const res = await elearningApiCall.post(
        "/quiz/new",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

interface QuizSlice {
  quizzes: [];
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  messageType: string;
}

const initialState: QuizSlice = {
  quizzes: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: "",
  messageType: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuizzes.pending, (state, action: any) => {
      state.isFetching = true;
    });
    builder.addCase(getQuizzes.rejected, (state, action: any) => {
      state.isSuccess = false;
      state.message = action.payload;
      state.messageType = "error";
    });
    builder.addCase(getQuizzes.fulfilled, (state, { payload }: any) => {
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.quizzes = payload;
    });
    builder.addCase(addQuiz.fulfilled, (state: any, { payload }: any) => {
      const { description, title, id } = payload;
      const params: QuizAddParams = {
        description,
        title,
        id,
      };
      state.quizzes.push(params);
    });
  },
});

export const quizSelect = (state: RootState) => state.quiz;
export default quizSlice.reducer;
