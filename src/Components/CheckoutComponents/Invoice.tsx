import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useRef, forwardRef } from "react";
import ProductsAdd from "./ProductsAdd";
import { useState } from "react";
import BasicDetails from "../InvoiceComponents/BasicDetails";
import BillNo from "../InvoiceComponents/BillNo";
import Date from "../InvoiceComponents/Date";
import InvoiceFrame from "../InvoiceComponents/InvoiceFrame";
import { useReactToPrint } from "react-to-print";

export default function Invoice() {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // useReactToPrint hook returns a handlePrint function

  const [shopName, setShopName] = useState("ARTH ENTERPRISES");
  const [address, setAddress] = useState(
    "2GF-1, Scheme No.54, Vijay Nagar, Indore (452010)"
  );
  const [gstNo, setGstNo] = useState("2T5DF45GHYT5");

  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Tesla",

      sellingPrice: 1000,

      discount: 50,
    },
    {
      id: 2,
      productName: "BMW",

      sellingPrice: 2000,

      discount: 10,
    },
    {
      id: 3,
      productName: "Lays",

      sellingPrice: 20,

      discount: 90,
    },
  ]);
  return (
    <>
      <Box p={"3rem"}>
        <Center>
          <Heading pb={"2rem"}>INVOICE</Heading>
        </Center>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <ProductsAdd products={products} />
          </Box>
          <Box bg={"#F5F5F5"}>
            <Center pt={"2rem"}>
              <Heading size={"md"}>Invoice Preview</Heading>
            </Center>
            <Box p={"3rem"}>
              <InvoiceFrame ref={componentRef} />
            </Box>
            <Flex>
              <Box></Box>
              <Spacer />
              <Button
                onClick={handlePrint}
                type="submit"
                mr={"3rem"}
                mb={"2rem"}
                colorScheme="teal"
              >
                Print
              </Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
