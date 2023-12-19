import { Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  shopName: string;
  address: string;
  gstNo: string;
}

export default function BasicDetails({ shopName, address, gstNo }: Props) {
  return (
    <>
      <Center>
        <Heading>{shopName.toUpperCase()}</Heading>
      </Center>
      <Center>
        <Text fontSize="2xl">{address}</Text>
      </Center>
      <Center>
        <Text fontSize="2xl">GSTIN NO : {gstNo}</Text>
      </Center>
      <Center>
        <Text fontSize="2xl">INVOICE</Text>
      </Center>
    </>
  );
}
