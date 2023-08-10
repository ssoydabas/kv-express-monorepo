import { type Dispatch, type SetStateAction } from "react";
import { Modal } from "native-base";

import { CustomerRequestModalFormSection } from "./CustomerRequestModalFormSection";
import { HoursSelectionSection } from "./HoursSelectionSection";

interface ICustomerRequestModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedDate: string;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

export default function CustomerRequestModal({
  isModalOpen,
  closeModal,
  selectedDate,
  selectedTime,
  setSelectedTime,
}: ICustomerRequestModalProps) {
  const selectedFullDate =
    selectedDate && selectedTime ? `${selectedDate}T${selectedTime}:00` : "";

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => {
        closeModal();
      }}
      size="xl"
    >
      <Modal.Content>
        <Modal.CloseButton
          onPress={() => {
            closeModal();
          }}
        />
        <Modal.Header>
          {!selectedFullDate ? "Select a Time" : "Your Information"}
        </Modal.Header>

        <Modal.Body>
          {!selectedFullDate && (
            <HoursSelectionSection
              selectedDate={selectedDate}
              setSelectedTime={setSelectedTime}
            />
          )}

          {selectedFullDate && (
            <CustomerRequestModalFormSection
              selectedFullDate={selectedFullDate}
              closeModal={closeModal}
            />
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
