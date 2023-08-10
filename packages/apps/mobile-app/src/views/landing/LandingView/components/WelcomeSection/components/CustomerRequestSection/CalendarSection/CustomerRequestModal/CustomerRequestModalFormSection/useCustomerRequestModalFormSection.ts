import { useCallback, useState, useEffect } from "react";
import { useMaskedState } from "~root/services/forms";

import type { BadRequestError } from "~root/services/api";
import { useCreateOneEventCallback } from "~root/services/api/calendar";

export const useCreateCustomerRequestModalForm = (
  selectedFullDate: string,
  closeModal: () => void
) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useMaskedState("06 9999 9999", "custom", "");
  const [email, setEmail] = useState("");

  const [currentLocation, setCurrentLocation] = useState("");
  const [currentLocationPostCode, setCurrentLocationPostCode] = useState("");

  const [destinationLocation, setDestinationLocation] = useState("");
  const [destinationLocationPostCode, setDestinationLocationPostCode] =
    useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    if (selectedFullDate) setDate(`${selectedFullDate}`);
  }, [selectedFullDate]);

  const { createOneEvent, isLoading, error, isError } =
    useCreateOneEventCallback(closeModal);

  const badRequestErrors = (error as BadRequestError)?.errors ?? [];
  const nameError = badRequestErrors.find((e) => e.param === "name")?.msg;
  const mobileError = badRequestErrors.find((e) => e.param === "mobile")?.msg;
  const emailError = badRequestErrors.find((e) => e.param === "email")?.msg;

  const currentLocationError = badRequestErrors.find(
    (e) => e.param === "current-location"
  )?.msg;
  const currentLocationPostCodeError = badRequestErrors.find(
    (e) => e.param === "current-location-post-code"
  )?.msg;

  const destinationLocationError = badRequestErrors.find(
    (e) => e.param === "destination-location"
  )?.msg;
  const destinationLocationPostCodeError = badRequestErrors.find(
    (e) => e.param === "destination-location-post-code"
  )?.msg;

  const globalErrorMessage =
    error?.statusCode === 401 || error?.statusCode === 404
      ? error.message
      : undefined;

  return {
    mobile,

    setName,
    setMobile,
    setEmail,

    setCurrentLocation,
    setCurrentLocationPostCode,

    setDestinationLocation,
    setDestinationLocationPostCode,

    setDate,

    isLoading,
    isError,

    nameError,
    mobileError,
    emailError,
    currentLocationError,
    currentLocationPostCodeError,
    destinationLocationError,
    destinationLocationPostCodeError,

    globalErrorMessage,

    createOneEvent: useCallback(() => {
      createOneEvent({
        name,
        mobile: mobile.replace(/\s+/g, ""),
        email,
        currentLocation,
        currentLocationPostCode,
        destinationLocation,
        destinationLocationPostCode,
        date,
      });
    }, [
      name,
      mobile,
      email,
      currentLocation,
      currentLocationPostCode,
      destinationLocation,
      destinationLocationPostCode,
      date,
    ]),
  };
};
