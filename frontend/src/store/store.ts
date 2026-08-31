import { configureStore, createSlice } from '@reduxjs/toolkit';

// Temporary slice to avoid "Store does not have a valid reducer" error
const appSlice = createSlice({
  name: 'app',
  initialState: { status: 'idle' },
  reducers: {}
});

export const store = configureStore({
  reducer: {
    app: appSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
