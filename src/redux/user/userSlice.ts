import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: {
    generalQuestions: {
      currentOccupation: null,
      education: null,
      schoolEducationLevel: null,
    },
    educationDetails: [],
    olympiads: {
      haveVictory: false,
      data: [],
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Education
    setGeneralQuestions: (state, action): void => {
      state.education.generalQuestions = {
        ...state.education.generalQuestions,
        ...action.payload,
      };
    },
    setEducationDetails: (state, action): void => {
      state.education.educationDetails = {
        ...state.education.educationDetails,
        ...action.payload,
      };
    },
    setOlympiads: (state, action): void => {
      state.education.olympiads = {
        ...state.education.olympiads,
        ...action.payload,
      };
    },
    // language skills
  },
});

export const { setEducationDetails, setGeneralQuestions, setOlympiads } =
  userSlice.actions;

export default userSlice.reducer;
