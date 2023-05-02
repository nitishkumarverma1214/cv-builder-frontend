import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = [
  { id: uid(6), institution: "Karunya", degree: "B.tech", percent: 90 },
];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    update: (state, action) => {
      return state.map((edu) => {
        if (edu.id === action.payload.id)
          return { ...edu, ...action.payload.updatedEducation };

        return edu;
      });
    },

    add: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter((edu) => action.payload !== edu.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = educationSlice.actions;

export default educationSlice.reducer;
