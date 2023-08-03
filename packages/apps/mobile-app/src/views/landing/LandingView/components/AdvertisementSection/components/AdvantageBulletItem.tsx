import { HStack, Text } from "native-base";

import StarIcon from "~root/components/icons/StarIcon";

interface IAdvantageBulletItemProps {
  text: string;
}

export default function AdvantageBulletItem({
  text,
}: IAdvantageBulletItemProps) {
  return (
    <HStack alignItems="center" space="8">
      <StarIcon size="xl" color="primary.400" />
      <Text fontSize="36">{text}</Text>
    </HStack>
  );
}
