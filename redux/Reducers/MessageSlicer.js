import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Chats: null,
}

const MessageSlicer = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setSelectedChats: (state, action) => {
            state.Chats = action.payload.Chat;

        },
        unSelectedChats: (state) => {
            state.Chats = null;
        }

    }
});

export const { setSelectedChats, unSelectedChats } = MessageSlicer.actions
export const SelectedChats = (state) => state.chat.Chats;
export default MessageSlicer.reducer