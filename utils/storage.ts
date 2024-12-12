import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export async function getFromStorage(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
}

export async function setInStorage(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}
