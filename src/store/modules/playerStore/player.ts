import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Song } from "@/api/playerApi/type.ts";
import { getSongApi } from "@/api/playerApi";

interface InitialState {
  song: Song;
}
export const featchSongAction = createAsyncThunk(
  "Song",
  async (ids: number, { dispatch }) => {
    const result = await getSongApi(ids);
    const song = result.songs[0];
    if (song) {
      dispatch(changeSongAction(song));
    }
  }
);
const initialState: InitialState = {
  song: {}
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeSongAction: (state, { payload }) => {
      state.song = payload;
    }
  }
});

export const { changeSongAction } = playerSlice.actions;
export default playerSlice.reducer;
