import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = [
  {
    id: uid(6),
    organization: "Neosoft",
    joinDate: "2023-02-24",
    location: "Mumbai",
    position: "Software Engineer",
    ctc: 5.5,
    lastDate: "2025-02-23",
    technologies: ["HTML", "css", "react", "js"],
  },
];

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    update: (state, action) => {
      return state.map((exp) => {
        if (exp.id === action.payload.id)
          return { ...exp, ...action.payload.updatedExperience };

        return exp;
      });
    },

    add: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter((exp) => action.payload !== exp.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = experienceSlice.actions;

export default experienceSlice.reducer;
