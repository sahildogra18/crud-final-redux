import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action

export let createPlayer = createAsyncThunk(
  "createPlayer",
  async ({ name, age, club }) => {
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

//Delete action

export let deletePalyer = createAsyncThunk("deletePlayer", async ({ id }) => {
  axios.delete(
    `https://futball-records-default-rtdb.firebaseio.com/footballData/${id}.json`
  );
});

//edit action

export let editPlayer = createAsyncThunk(
  "editPlayer",
  async ({ id, name, club, age }, { rejectWithValue }) => {
    try {
      let response = await axios.put(
        `https://futball-records-default-rtdb.firebaseio.com/footballData/${id}.json`,
        {
          player_name: name,
          player_club: club,
          player_age: age,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
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
