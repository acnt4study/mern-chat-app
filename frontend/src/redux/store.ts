import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../components/sidebar/PeopleSlice';
import messagesReducer from '../components/msgview/MessagesSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    messages: messagesReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
