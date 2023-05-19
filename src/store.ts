import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// import jobSlice from './features/job/jobSlice';
// import userSlice from './features/user/userSlice';
// import allJobsSlice from './features/allJobs/allJobsSlice';

// state type

export const store = configureStore({
  reducer: {
    // user: userSlice,
    // job: jobSlice,
    // allJobs: allJobsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
