import { VStack, FormControl, Input, Text, Button } from "native-base";

import { useCreateCustomerRequestModalForm } from "./useCustomerRequestModalFormSection";

interface ICustomerRequestModalFormSectionProps {
  selectedFullDate: string;
  closeModal: () => void;
}

export default function CustomerRequestModalFormSection({
  selectedFullDate,
  closeModal,
}: ICustomerRequestModalFormSectionProps) {
  const [date, time] = selectedFullDate.split("T");

  const {
    createOneEvent,

    mobile,

    setName,
    setMobile,
    setEmail,
    setCurrentLocation,
    setCurrentLocationPostCode,
    setDestinationLocation,
    setDestinationLocationPostCode,

    isLoading,
    nameError,
    mobileError,
    emailError,

    currentLocationError,
    currentLocationPostCodeError,
    destinationLocationError,
    destinationLocationPostCodeError,
    globalErrorMessage,
    isError,
  } = useCreateCustomerRequestModalForm(selectedFullDate, closeModal);

  return (
    <VStack width="full" space="4" px="6" py="2" alignItems="center">
      <Text width="full" fontSize="lg" textAlign="end" italic>
        On {`${date} - ${time}`}
      </Text>

      <FormControl isRequired isInvalid={nameError !== undefined}>
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Your Full Name"
          onChangeText={setName}
        />
        <FormControl.ErrorMessage>{nameError}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={mobileError !== undefined}>
        <Input
          variant="outline"
          size="md"
          width="full"
          keyboardType="numeric"
          placeholder="Enter Your Mobile"
          value={mobile}
          onChangeText={setMobile}
        />
        <FormControl.ErrorMessage>{mobileError}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={emailError !== undefined}>
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Your Email"
          onChangeText={setEmail}
        />
        <FormControl.ErrorMessage>{emailError}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={currentLocationError !== undefined}>
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Your Current Location"
          onChangeText={setCurrentLocation}
        />
        <FormControl.ErrorMessage>
          {currentLocationError}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={currentLocationPostCodeError !== undefined}
      >
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Your Current Location Post Code"
          onChangeText={setCurrentLocationPostCode}
        />
        <FormControl.ErrorMessage>
          {currentLocationPostCodeError}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={destinationLocationError !== undefined}
      >
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Destination Location"
          onChangeText={setDestinationLocation}
        />
        <FormControl.ErrorMessage>
          {destinationLocationError}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={destinationLocationPostCodeError !== undefined}
      >
        <Input
          variant="outline"
          size="md"
          width="full"
          placeholder="Enter Destination Post Code"
          onChangeText={setDestinationLocationPostCode}
        />
        <FormControl.ErrorMessage>
          {destinationLocationPostCodeError}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isInvalid={isError}>
        <FormControl.ErrorMessage>
          {globalErrorMessage}
        </FormControl.ErrorMessage>
      </FormControl>

      <Button
        variant="solid"
        size="lg"
        px="16"
        disabled={isLoading}
        onPress={createOneEvent}
      >
        Book!
      </Button>
    </VStack>
  );
}
