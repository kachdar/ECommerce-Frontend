// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";

// const token = localStorage.getItem("user");

// const initialState = {
//   userInfo: null,
//   user: token ? token : null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const register = createAsyncThunk(
//   "auth/register",
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message = error.message;

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authService.logout();
// });

// export const getUserInfo = createAsyncThunk("auth/getUserInfo", async () => {
//   await authService.getUserInfo();
// });

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.user = null;
//         state.message = action.payload;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       });
//   },
// });

// export const { reset } = authSlice.actions;

// export default authSlice.reducer;
