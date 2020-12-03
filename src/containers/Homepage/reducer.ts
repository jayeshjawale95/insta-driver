import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'homepage',
  initialState: {
    isLoading: false,
    drivers: [],
    driversError: '',
    driverChat: [],
    driversChatError: ''
  },
  reducers: {
    fetchDriversDataRequest(state) {
      state.isLoading = true;
      state.driversError = '';
    },
    fetchDriversDataSuccess(state, action) {
      state.isLoading = false;
      state.drivers = action.payload;
    },
    fetchDriversDataFailure(state, action) {
      state.isLoading = false;
      state.drivers = [];
      state.driversError = action.payload;
    },
    fetchDriverChatDataRequest(state) {
      state.isLoading = true;
      state.driversChatError = '';
    },
    fetchDriverChatDataSuccess(state, action) {
      state.isLoading = false;
      state.driverChat = action.payload;
    },
    fetchDriverChatDataFailure(state, action) {
      state.isLoading = false;
      state.driverChat = [];
      state.driversChatError = action.payload;
    },
  },
});

const { actions, reducer } = configSlice;

export const {
  fetchDriversDataRequest,
  fetchDriversDataSuccess,
  fetchDriversDataFailure,
  fetchDriverChatDataRequest,
  fetchDriverChatDataSuccess,
  fetchDriverChatDataFailure
} = actions;

export default reducer;
