import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
  count: number
  message: string
}
const initialState: State = {
    count: 0,
    message: "Hello redux"
}
const counterSlice = createSlice({
  name: "counter",
  reducers: {
    changeCount(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    }
  },
  initialState
});
export const { changeCount } = counterSlice.actions;
export default counterSlice.reducer;
