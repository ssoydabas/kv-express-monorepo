import { VStack, Skeleton } from "native-base";

export default function CatalogItem() {
  return (
    <VStack
      width="260"
      height="320"
      mx="6"
      my="4"
      px="2"
      py="4"
      space="4"
      justifyContent="space-around"
      alignItems="center"
    >
      <Skeleton width="full" startColor="primary.200" />
      <Skeleton.Text px="2" startColor="primary.200" />
      <Skeleton.Text px="2" startColor="primary.200" />
      <Skeleton rounded="md" startColor="primary.200" />
    </VStack>
  );
}
