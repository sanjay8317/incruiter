import userListReducers from './slices/userListSlice';

export const rootReducer = {
    user: userListReducers?.userSlice,
};

export default rootReducer;