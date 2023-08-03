import { VStack, Text, Flex } from "native-base";

import { CatalogItem } from "./components";

export default function CatalogSection() {
  return (
    <VStack
      width="full"
      py="32"
      justifyContent="center"
      alignItems="center"
      space="16"
    >
      <Text fontSize="4xl" fontWeight="bold">
        OUR CATALOG
      </Text>

      <Flex width="2/3" flexWrap="wrap" flexDirection="row">
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </Flex>
    </VStack>
  );
}
