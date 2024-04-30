import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const saveDataToAsyncStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`Data stored successfully in AsyncStorage with key: ${key}`);
  } catch (error) {
    console.error(`Error storing data in AsyncStorage with key ${key}:`, error);
  }
};

const UserdataSlice = createSlice({
    name: "userdata",
    initialState: {
        uservalue:{},
    },
    reducers: {
        adduser: (state, action) => {
            state.uservalue= action.payload;
            saveDataToAsyncStorage('userData', state.uservalue);
        },
    },
});

export const { adduser } = UserdataSlice.actions;
export default UserdataSlice.reducer;
