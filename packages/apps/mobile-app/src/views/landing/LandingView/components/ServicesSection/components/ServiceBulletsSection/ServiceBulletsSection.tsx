import { Flex } from "native-base";

import ServiceBullet from "./ServiceBullet";

import TruckIcon from "~root/components/icons/TruckIcon";
import ClockIcon from "~root/components/icons/ClockIcon";
import DockerIcon from "~root/components/icons/DockerIcon";
import BuildingIcon from "~root/components/icons/BuildingIcon";
import PaintingBrushIcon from "~root/components/icons/PaintingBrushIcon";

export default function ServiceBulletsSection() {
  return (
    <Flex flexWrap="wrap" flexDirection="row">
      <ServiceBullet
        title="Transport"
        text="Transport of furniture, white goods or packages."
        icon={<TruckIcon size="6xl" color="primary.400" />}
      />
      <ServiceBullet
        title="Private Movements"
        text="Removals of complete to partial household effects."
        icon={<ClockIcon size="6xl" color="primary.400" />}
      />
      <ServiceBullet
        title="Rush Movements"
        text="We can respond adequately to all your urgent requests. A piece of furniture or white goods, we arrange it."
        icon={<DockerIcon size="6xl" color="primary.400" />}
      />
      <ServiceBullet
        title="Clearance"
        text="Clearing the house due to moving house, death or immigration. Our team is ready for you."
        icon={<BuildingIcon size="6xl" color="primary.400" />}
      />
      <ServiceBullet
        title="Job Work"
        text="We can also carry out various odd jobs in and around your home. You name it, we do it."
        icon={<PaintingBrushIcon size="6xl" color="primary.400" />}
      />
    </Flex>
  );
}
