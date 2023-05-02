import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./feature/education/educationSlice";
import experienceReducer from "./feature/experience/experienceSlice";
import projectReducer from "./feature/project/projectSlice";
import skillReducer from "./feature/skill/skillSlice";
import personalDetailReducer from "./feature/personal-details/personalDetailSlice";
import userReducer from "./feature/user/userSlice";
export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
    project: projectReducer,
    skill: skillReducer,
    personalDetail: personalDetailReducer,
    user: userReducer,
  },
});
