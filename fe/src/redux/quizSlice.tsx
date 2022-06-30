import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { elearningApiCall } from "../utils/railsApi";
import { UserEditInputForm, UserEditInputParams } from "../pages/EditQuiz";
import { PayloadAction } from "@reduxjs/toolkit";
import { TobeEditParams } from "../pages/AdminQuizzes";
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

export const editQuiz = createAsyncThunk(
  "quiz/edit_quiz",
  async (data: UserEditInputParams, { rejectWithValue, fulfillWithValue }) => {
    const { title, description, id } = data;
    try {
      const res = await elearningApiCall.post(
        `admin/quiz/${id}/edit`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: data.token,
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
  TobeEditQuiz: {
    title: string;
    description: string;
    id: any;
  };
}

const initialState: QuizSlice = {
  quizzes: [],
  TobeEditQuiz: {
    title: "",
    description: "",
    id: "",
  },
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: "",
  messageType: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setTobeEditQuiz: (
      state: QuizSlice,
      { payload }: PayloadAction<TobeEditParams>
    ) => {
      return {
        ...state,
        TobeEditQuiz: payload,
      };
    },
  },
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
    builder.addCase(editQuiz.fulfilled, (state, { payload }: any) => {
      // set success message
      state.isFetching = false;
      state.isSuccess = true;
      state.messageType = "success";
    });
    builder.addCase(editQuiz.rejected, (state, { payload }: any) => {
      // set success message
      state.isFetching = false;
      state.isSuccess = false;
      state.message = "Quiz update failed";
    });
  },
});

export const quizSelect = (state: RootState) => state.quiz;
export default quizSlice.reducer;

// action
export const { setTobeEditQuiz } = quizSlice.actions;
