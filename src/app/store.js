import { configureStore } from '@reduxjs/toolkit';
import photosSlice from "../features/photos/photosSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    photos:photosSlice,
    users:usersSlice
  },
});
