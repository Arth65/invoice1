import {
  Center,
  Flex,
  Spacer,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Button,
} from "@chakra-ui/react";

import React, { forwardRef, ForwardedRef, useState } from "react";
import BasicDetails from "./BasicDetails";
import BillNo from "./BillNo";
import Date from "./Date";

const InvoiceFrame: React.ForwardRefRenderFunction<HTMLDivElement> = (
  props,
  ref
) => {
  const [shopName, setShopName] = useState("ARTH ENTERPRISES");
  const [address, setAddress] = useState(
    "2GF-1, Scheme No.54, Vijay Nagar, Indore (452010)"
  );
  const [gstNo, setGstNo] = useState("2T5DF45GHYT5");
  const products = [
    {
      id: 1,
      productName: "Tesla",
      quantity: 2,
      sellingPrice: 50000,
      discount: 20,
    },
    {
      id: 2,
      productName: "Lays",
      quantity: 5,
      sellingPrice: 10,
      discount: 0,
    },
    {
      id: 3,
      productName: "Redmi K20 Pro",
      quantity: 7,
      sellingPrice: 20000,
      discount: 30,
    },
    {
      id: 4,
      productName: "Rolls Royce Cullinan",
      quantity: 10,
      sellingPrice: 49887,
      discount: 65,
    },
    {
      id: 5,
      productName: "Audi",
      quantity: 6,
      sellingPrice: 123331,
      discount: 34,
    },
  ];

  return (
    <div ref={ref}>
      <Box bg={"#F9FBFF"} p={"5rem"}>
        <Center>
          <Box>
            <BasicDetails shopName={shopName} address={address} gstNo={gstNo} />

            <Flex pt={"5rem"}>
              <BillNo />
              <Spacer />
              <Date />
            </Flex>
            <Divider />

            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>ITEM NAME</Th>
                    <Th>QUANTITY</Th>
                    <Th isNumeric>PRICE</Th>
                    <Th isNumeric>AMOUNT</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map((product) => (
                    <Tr key={product.id}>
                      <Td>{product.productName}</Td>
                      <Td>{product.quantity}</Td>
                      <Td isNumeric>
                        $
                        {(
                          product.sellingPrice -
                          (product.sellingPrice * product.discount) / 100
                        ).toFixed(2)}
                      </Td>
                      <Td isNumeric>
                        $
                        {(
                          (product.sellingPrice -
                            (product.sellingPrice * product.discount) / 100) *
                          product.quantity
                        ).toFixed(2)}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
export default forwardRef(InvoiceFrame);
