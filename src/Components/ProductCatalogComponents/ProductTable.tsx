import {
  Center,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Box,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

interface Product {
  id: number;
  productName: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  stock: number;
  discount: number;
}

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}

export default function ProductTable({ products, onDelete }: Props) {
  return (
    <>
      <Box bg={"#F1F6F9"} width={"100vw"} height={"100vh"}>
        <Center>
          <Heading size={"md"} mt={"3rem"}>
            PRODUCTS
          </Heading>
        </Center>
        <Center>
          <TableContainer pt={"3rem"}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Product Name</Th>
                  <Th>Category</Th>
                  <Th>Cost Price</Th>
                  <Th>Selling Price</Th>
                  <Th>Number in Stock</Th>
                  <Th>Discount(%)</Th>
                  <Th>Price</Th>
                </Tr>
              </Thead>

              <Tbody>
                {products.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>{product.productName}</Td>
                    <Td>{product.category}</Td>
                    <Td>${product.costPrice}</Td>
                    <Td>${product.sellingPrice}</Td>
                    <Td>{product.stock}</Td>
                    <Td>{product.discount}%</Td>
                    <Td>
                      {(
                        product.sellingPrice -
                        (product.sellingPrice * product.discount) / 100
                      ).toFixed(2)}
                    </Td>
                    <Td>
                      <Button
                        onClick={() => onDelete(product.id)}
                        colorScheme="red"
                        variant="ghost"
                      >
                        <MdDelete />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Box>
    </>
  );
}
