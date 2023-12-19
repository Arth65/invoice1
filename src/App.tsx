import { useState } from "react";
import Form from "./Components/FormComponents/Form";
import ProductCatalog from "./Components/ProductCatalogComponents/ProductCatalog";
import ProductTable from "./Components/ProductCatalogComponents/ProductTable";
import SideBar from "./Components/SideBar";
import ProductsFrame from "./Components/ProductCatalogComponents/ProductsFrame";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Invoice from "./Components/CheckoutComponents/Invoice";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsFrame />} />
          <Route path="/" element={<Form />} />
          <Route path="/checkout" element={<Invoice />} />
        </Routes>
      </BrowserRouter>

      {/* <ProductsFrame /> */}
      {/* <Form /> */}
      {/* <SideBar /> */}
      {/* <ProductCatalog onSubmit={(data) => console.log(data)} /> */}
      {/* <ProductTable
        products={products}
        onDelete={(id) => setProducts(products.filter((e) => e.id != id))}
      /> */}
    </>
  );
}

// {
/* import { GridItem, Grid } from "@chakra-ui/react";
import SideBar from "./Components/SideBar";


// import Footer from "./Components/Footer";

export default function App() {


  return (
    <>
      <Grid
        templateAreas={`"leftSide rightSide" `}
        gridTemplateColumns={"160px"}
      >
        <GridItem bg={"black"} area="leftSide" height={"100vh"} position={'fixed'} >
          <SideBar />
          {/* <Footer/> */

//         </GridItem>

//         <GridItem bg={"white"} area="rightSide">
//           nav
//         </GridItem>
//       </Grid>
//     </>
//   );
// } */}
