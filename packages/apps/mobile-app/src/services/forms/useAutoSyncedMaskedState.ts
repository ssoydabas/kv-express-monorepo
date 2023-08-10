import { useEffect } from "react";
import { type MaskFormat, useMaskedState } from "./useMaskedState";

export const useAutoSyncedMaskedState = (
  pattern: string,
  maskType: MaskFormat = "custom",
  autoUpdatingValue = ""
) => {
  const [state, setState] = useMaskedState(
    pattern,
    maskType,
    autoUpdatingValue
  );

  useEffect(() => {
    if (state !== autoUpdatingValue) setState(autoUpdatingValue);
  }, [autoUpdatingValue]);

  return [state, setState] as const;
};
