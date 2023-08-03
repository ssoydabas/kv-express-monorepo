import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UseAsyncStorageOptions<T = string> {
  key: string;
  initialValue: T;
  isJson?: boolean;
  onLoaded?: (value: T) => void;
}

export const useAsyncStorage = <T = string>({
  key,
  initialValue,
  isJson = false,
  onLoaded,
}: UseAsyncStorageOptions<T>): [T, (value: T) => Promise<void>, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const getStoredValue = async () => {
      const item = await AsyncStorage.getItem(key);
      const value = item
        ? ((isJson ? JSON.parse(item) : item) as T)
        : initialValue;

      setStoredValue(value);
      onLoaded?.(value);
      setIsLoading(false);
    };

    getStoredValue().catch((error) => {
      console.log(error);
    });
  }, [key, initialValue]);

  const setNewValue = useCallback(
    async (value: T): Promise<void> => {
      if (value === undefined) {
        await AsyncStorage.removeItem(key);
      } else {
        await AsyncStorage.setItem(
          key,
          isJson ? JSON.stringify(value) : (value as string)
        );
      }
    },
    [key, isJson, setStoredValue]
  );

  return [storedValue, setNewValue, isLoading];
};
