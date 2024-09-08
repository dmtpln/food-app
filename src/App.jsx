import {Container} from "@mui/material";

import {ProductsTable} from "./ProductsTable";

import './App.css';

function App() {
  return (
    <Container sx={{ paddingTop: 2, paddingBottom: 5 }} className="App">
      <ProductsTable />
    </Container>
  );
}

export default App;
