import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action

export let createPlayer = createAsyncThunk(
  "createPlayer",
  async ({ name, age, club }, { rejectWithValue }) => {
    axios
      .post(
        "https://futball-records-default-rtdb.firebaseio.com/footballData.json",
        {
          player_name: name,
          player_club: club,
          player_age: age,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

//Read Action

export let showPlayer = createAsyncThunk(
  "showPlayer",
  async (_, { rejectWithValue }) => {
    try {
      let response = await fetch(
        "https://futball-records-default-rtdb.firebaseio.com/footballData.json"
      );
      let result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export let playerData = createSlice({
  name: "playerDetail",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlayer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(showPlayer.pending, (state) => {
        state.loading = true;
      })
      .addCase(showPlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(showPlayer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default playerData.reducer;
