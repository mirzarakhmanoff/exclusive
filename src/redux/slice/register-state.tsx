import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false, // Состояние для отображения OTP компонента
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state) => {
      state.isRegistered = true; // Устанавливаем флаг успешной регистрации
    },
    resetRegistration: (state) => {
      state.isRegistered = false; // Сбрасываем состояние
    },
  },
});

export const { registerSuccess, resetRegistration } = authSlice.actions;
export default authSlice.reducer;
