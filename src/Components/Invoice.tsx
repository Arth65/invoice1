import { Divider, Flex, Spacer } from "@chakra-ui/react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import BasicDetails from "./InvoiceComponents/BasicDetails";
import BillNo from "./InvoiceComponents/BillNo";
import Date from "./InvoiceComponents/Date";
import { useState } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Invoice() {
  const [previewInvoice, setPreviewInvoice] = useState(false);
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [gstNo, setGstNo] = useState("");
  return (
    <>
      {previewInvoice ? (
        <>
          <div className="invoice-div">
            <BasicDetails shopName={shopName} address={address} gstNo={gstNo} />

            <Flex pb={5}>
              <BillNo />
              <Spacer />
              <Date />
            </Flex>
            <Divider />
            <Box>
              <SimpleGrid columns={4} spacing={5}>
                <Box height="30px">
                  <Heading size={"md"}>ITEM NAME</Heading>
                </Box>
                <Box height="30px">
                  <Heading size={"md"}>QTY</Heading>
                </Box>
                <Box height="30px">
                  <Heading size={"md"}>PRICE</Heading>
                </Box>
                <Box height="30px">
                  <Heading size={"md"}>AMOUNT</Heading>
                </Box>
              </SimpleGrid>
              <Divider />
              <SimpleGrid columns={4} spacing={5}>
                <Box height="30px">Bulb</Box>
                <Box height="30px">2</Box>
                <Box height="30px">$10</Box>
                <Box height="30px">$20</Box>
              </SimpleGrid>
            </Box>

            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => setPreviewInvoice(false)}
            >
              Back
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Stack spacing={3}>
              <Input
                variant="flushed"
                placeholder="Name of your Shop"
                value={shopName}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setShopName(e.currentTarget.value)
                }
              />
              <Input
                variant="flushed"
                placeholder="Address of your Shop"
                value={address}
                onChange={(e) => setAddress(e.currentTarget.value)}
              />
              <Input
                variant="flushed"
                placeholder="GSTIN"
                value={gstNo}
                onChange={(e) => setGstNo(e.currentTarget.value)}
              />
            </Stack>
          </div>
          <div>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => setPreviewInvoice(true)}
            >
              Preview Invoice
            </Button>
          </div>
        </>
      )}
    </>
  );
}
