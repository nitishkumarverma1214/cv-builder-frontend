import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = {
  id: uid(6),
  name: "Nitish Verma",
  image: "",
  position: "Software Engineer",
  address: "H.No 9 Deepa Sector 2",
  city: "Airoli",
  state: "Mumbai",
  pin: "878987",
  phone: "89876789899",
  email: "abc@gmail.com",
  summary:
    "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
};

export const personalDetailSlice = createSlice({
  name: "personalDetail",
  initialState,
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = personalDetailSlice.actions;

export default personalDetailSlice.reducer;
