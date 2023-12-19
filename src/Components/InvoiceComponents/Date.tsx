import { Text } from "@chakra-ui/react";

export default function CurrentDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return <Text size="md">DATE : {currentDate}</Text>;
}
