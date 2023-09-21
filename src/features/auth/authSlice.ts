import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

export interface AuthState {
  password: string | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  password: null,
  accessToken: null, // for storing the JWT
  loading: false,
  error: null,
  success: false,
};

const backendURL = "http://localhost:9000";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (password: string, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/auth`,
        { password },
        config
      );
      console.log("data:", data);
      // store user's token in local storage
      localStorage.setItem("accessToken", data.accessToken);
      return data;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<string>) => {
    //   state.password = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.error = "rejected";
      });
  },
});

// export const { userLogin } = authSlice.actions;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice;
