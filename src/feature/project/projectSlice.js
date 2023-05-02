import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = [
  {
    id: uid(6),
    projectTitle: "Chat Application",
    teamSize: "5",
    duration: "5 Month",
    technology: "MERN",
    description: "Realtime Chat application implemented using soket.io",
  },
];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    update: (state, action) => {
      return state.map((project) => {
        if (project.id === action.payload.id)
          return { ...project, ...action.payload.updatedProject };

        return project;
      });
    },

    add: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter((project) => action.payload !== project.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = projectSlice.actions;

export default projectSlice.reducer;
