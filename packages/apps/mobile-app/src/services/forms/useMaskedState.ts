import { useState, useMemo } from "react";
import { mask } from "react-native-mask-text";

export type MaskFormat = "custom" | "currency" | "date" | "time";

export const useMaskedState = (
  pattern: string,
  maskType: MaskFormat = "custom",
  initialValue = ""
) => {
  const [value, setValue] = useState(initialValue);

  const maskedValue = useMemo(() => {
    if (maskType === "date") {
      return mask(value, pattern, maskType, { dateFormat: pattern });
    }

    return mask(value, pattern, maskType);
  }, [value, pattern, maskType]);

  return [maskedValue, setValue] as const;
};
