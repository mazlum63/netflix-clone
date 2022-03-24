import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import loginScreenReducer from '../features/loginScreenSclice';
import registrationReducer from '../features/registrationSlice';
import userPlanReducer from '../features/userPlanSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginScreen: loginScreenReducer,
    registration: registrationReducer,
    userPlan: userPlanReducer,
  },
});
