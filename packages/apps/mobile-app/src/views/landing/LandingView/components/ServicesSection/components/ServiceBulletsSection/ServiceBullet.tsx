import type { ReactNode } from "react";
import { VStack, Text } from "native-base";

interface IServiceBulletProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export default function ServiceBullet({
  title,
  text,
  icon,
}: IServiceBulletProps) {
  return (
    <VStack
      width="320"
      height="240"
      space="4"
      alignItems="center"
      m="6"
      px="2"
      py="4"
    >
      {icon}
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" px="4" textAlign="center" lineHeight="xl">
        {text}
      </Text>
    </VStack>
  );
}
