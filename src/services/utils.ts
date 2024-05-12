import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItemString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return false;
  }
};

export const setItemObject = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    return false;
  }
};

export const getItemString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : null;
  } catch (e) {
    return false;
  }
};

export const getItemObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return false;
  }
};

export function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}
