import { configureStore } from '@reduxjs/toolkit';
import MessageReducer from './Reducers/MessageSlicer';
import SelectedUserReducer from './Reducers/SelectedUsers';

export const store = configureStore({
    reducer: {
        SelectUser: SelectedUserReducer,
        chat: MessageReducer,

    }
})