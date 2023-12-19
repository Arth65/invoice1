import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useNumberInput,
} from "@chakra-ui/react";

interface Product {
  id: number;
  productName: string;

  sellingPrice: number;

  discount: number;
}
type Products = {
  id: number;
  productName: string;

  sellingPrice: number;

  discount: number;
};
interface Props {
  products: Product[];
  // onSubmit: (products: Products) => void;
}

export default function ProductsAdd({ products }: Props) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 10,
      precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <Box>
        <TableContainer pt={"3rem"}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Product Name</Th>

                <Th>Price</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>

            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.productName}</Td>

                  <Td>
                    {(
                      product.sellingPrice -
                      (product.sellingPrice * product.discount) / 100
                    ).toFixed(2)}
                  </Td>
                  <Td>
                    <HStack maxW="320px">
                      <Button {...inc}>+</Button>
                      <Input width={"4rem"} {...input} />
                      <Button {...dec}>-</Button>
                    </HStack>
                  </Td>
                  <Td>
                    <Button colorScheme="teal">Add</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
