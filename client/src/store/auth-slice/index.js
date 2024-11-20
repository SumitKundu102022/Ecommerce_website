import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  token: null,
};

export const registerUser = createAsyncThunk('/auth/register',
  async (formdata) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      formdata,
      { withCredentials: true }
    );

    return response.data;
  }
)

export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formdata) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      formdata,
      { withCredentials: true }
    );

    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

// export const checkAuth = createAsyncThunk(
//   "/auth/checkAuth",
//   async () => {
//     const response = await axios.get(
//       `${import.meta.env.VITE_API_URL}/api/auth/checkAuth`,
//       {
//         withCredentials: true,
//         headers: {
//           "Cache-Control": "no-store,no-cache must-revalidate,proxy-revalidate",
//           // Expires: "0",
//         },
//       }
//     );

//     return response.data;
//   }
// );

export const checkAuth = createAsyncThunk("/auth/checkAuth", async (token) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/auth/checkAuth`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-store,no-cache must-revalidate,proxy-revalidate",
        // Expires: "0",
      },
    }
  );

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetTokenAndCredentials: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    }
  },
  extraReducers: (builder) => { 
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        // state.user = null;
        // state.isAuthenticated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        // state.user = null;
        // state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success ? true : false;
        state.token = action.payload.token;
        sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.token = null;
      })
      .addCase(checkAuth.pending, (state, action) => {
        state.isLoading = true;
        // state.user = null;
        // state.isAuthenticated = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success ? true : false;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export const { setUser, resetTokenAndCredentials } = authSlice.actions;
export default authSlice.reducer;
