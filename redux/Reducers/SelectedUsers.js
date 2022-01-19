import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    profile_pic: '',
    userID: '',


}

const SelectedUsers = createSlice({
    name: "SelectUser",
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.username = action.payload.username;
            state.profile_pic = action.payload.profile_pic;
            state.userID = action.payload.userID;

        },
        unSelectedUser: (state) => {
            state.username = "";
            state.profile_pic = "";
            state.userID = "";
        }
    }
});

export const { setSelectedUser, unSelectedUser } = SelectedUsers.actions
export const selectUsername = (state) => state.SelectUser.username;
export const selectProfile_pic = (state) => state.SelectUser.profile_pic;
export const selectuserID = (state) => state.SelectUser.userID;
export default SelectedUsers.reducer