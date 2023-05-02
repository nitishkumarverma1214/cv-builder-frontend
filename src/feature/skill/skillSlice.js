import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = [
  {
    id: uid(6),
    skill: "Java",
    rating: 4,
  },
];

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    update: (state, action) => {
      return state.map((skill) => {
        if (skill.id === action.payload.id)
          return { ...skill, ...action.payload.updatedSkill };

        return skill;
      });
    },

    add: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter((skill) => action.payload !== skill.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = skillSlice.actions;

export default skillSlice.reducer;
