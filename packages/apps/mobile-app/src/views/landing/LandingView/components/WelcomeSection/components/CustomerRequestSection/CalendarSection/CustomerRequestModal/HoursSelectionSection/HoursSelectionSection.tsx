import { type Dispatch, type SetStateAction } from "react";
import { Flex, Button, VStack, Skeleton } from "native-base";

import { useGetManyEventsInADayCallback } from "~root/services/api/calendar";

import { AVAILABLE_TIMES } from "~root/config";
import type { IGoogleCalendarSanitizedEventType } from "~api/services/google-calendar/types";

interface IHoursSelectionSectionProps {
  selectedDate: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

export default function HoursSelectionSection({
  selectedDate,
  setSelectedTime,
}: IHoursSelectionSectionProps) {
  const { events, isLoading } = useGetManyEventsInADayCallback(selectedDate);

  if (isLoading)
    return (
      <VStack space="8" p="2">
        <Skeleton.Text width="full" startColor="primary.200" />
        <Skeleton.Text width="full" startColor="primary.200" />
        <Skeleton.Text width="full" startColor="primary.200" />
        <Skeleton.Text width="full" startColor="primary.200" />
        <Skeleton.Text width="full" startColor="primary.200" />
      </VStack>
    );

  const occupiedTimesSet = new Set(
    events.map((event: IGoogleCalendarSanitizedEventType) => {
      return event.start.dateTime.slice(11, 16); // Extract 'HH:MM' part from '2023-08-10T12:00:00.529Z'
    })
  );

  return (
    <Flex flexDir="row" wrap="wrap">
      {AVAILABLE_TIMES.map((time, index) => (
        <Button
          key={index}
          width="1/6"
          m="2"
          borderRadius="full"
          variant="outline"
          onPress={() => {
            setSelectedTime(time);
          }}
          isDisabled={occupiedTimesSet.has(time)}
        >
          {time}
        </Button>
      ))}
    </Flex>
  );
}
