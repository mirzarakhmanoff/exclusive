import { createSlice } from "@reduxjs/toolkit";

const getStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Failed to get data from localStorage", error);
    return null;
  }
};

const saveStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save data to localStorage", error);
  }
};

// Слайс для Wishlist
const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    value: getStorage("wishlist") || [], // Инициализация из localStorage
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        // Если продукта нет в списке, добавляем его
        state.value.push(action.payload);
      } else {
        // Если продукт уже есть, удаляем его
        state.value.splice(itemIndex, 1);
      }

      // Обновляем localStorage
      saveStorage("wishlist", state.value);
    },
    clearWishlist: (state) => {
      state.value = [];
      saveStorage("wishlist", state.value); // Очистка localStorage
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlist.actions;
export default wishlist.reducer;
