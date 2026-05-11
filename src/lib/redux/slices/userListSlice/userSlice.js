import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    data: [],
};

const userSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        getUserList: (state, action) => {
            return action.payload;
        },
     
    },
});
export const { getUserList } = userSlice.actions;

export default userSlice.reducer;
