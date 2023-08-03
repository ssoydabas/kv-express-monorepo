import { IconButton } from "native-base";
import UserIcon from "~root/components/icons/UserIcon";

export default function HeaderRightIcon() {
  return (
    <IconButton
      padding="4"
      icon={<UserIcon color="secodary.400" size="lg" />}
      onPress={() => {
        console.log("HEADER RIGHT ICON PRESSED!");
      }}
    />
  );
}
