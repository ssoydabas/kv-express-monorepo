import { useEffect } from "react";

import { useAsyncStorage } from "./useAsyncStorage";

export interface UseAsyncStorageSyncronizerOptions<StorageType> {
  key: string;
  value: StorageType;
  initialValue: StorageType;
  onLoaded: (initialStoredValue: StorageType) => void;
  isJson?: boolean;
  compare?: (a: StorageType, b: StorageType) => boolean;
}

export const useAsyncStorageSyncronizer = <StorageType>({
  key,
  value,
  initialValue,
  onLoaded,
  isJson = false,
  compare = (a, b) => a === b,
}: UseAsyncStorageSyncronizerOptions<StorageType>) => {
  const [storedValue, setStoredValue, isLoadingStoredValue] =
    useAsyncStorage<StorageType>({ key, initialValue, isJson, onLoaded });

  useEffect(() => {
    if (isLoadingStoredValue) return;
    if (compare(value, storedValue)) return;

    setStoredValue(value).catch(console.error);
  }, [value, storedValue, isLoadingStoredValue, setStoredValue]);

  return { storedValue, isLoadingStoredValue };
};
