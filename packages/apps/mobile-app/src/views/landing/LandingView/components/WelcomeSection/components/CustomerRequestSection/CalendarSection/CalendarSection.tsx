import { useState } from "react";

import { Calendar } from "react-native-calendars";

import LeftArrowIcon from "~root/components/icons/LeftArrowIcon";
import RightArrowIcon from "~root/components/icons/RightArrowIcon";

import { CustomerRequestModal } from "./CustomerRequestModal";

import { primary } from "~root/services/kv-express-theme/colors";

const CURRENT_DATE = new Date().toISOString();

export default function CalendarSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <>
      <Calendar
        date={CURRENT_DATE}
        selected={selectedDate}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setIsModalOpen(true);
        }}
        markedDates={{
          [CURRENT_DATE.split("T")[0]]: {
            selected: true,
            marked: true,
            dotColor: primary[400],
            selectedColor: "#ffffff",
            selectedTextColor: primary[400],
          },
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: primary[400],
          },
        }}
        style={{
          width: 480,
          shadowRadius: 32,
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          paddingHorizontal: 6,
          paddingVertical: 12,
          borderRadius: 16,
        }}
        headerStyle={{ borderBottomWidth: 1 }}
        enableSwipeMonths
        renderArrow={(direction) => {
          if (direction === "left")
            return <LeftArrowIcon color="black" size="lg" />;
          return <RightArrowIcon color="black" size="lg" />;
        }}
      />

      {isModalOpen && (
        <CustomerRequestModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </>
  );
}
