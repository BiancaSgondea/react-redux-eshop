import React from 'react';
import './App.css';
import ProductList from './components/Product/ProductList'
import Container from 'react-bootstrap/Container'
// import Navbar from './components/NavbarComponent'


function App() {
  return (
    <div className="App" >
      <Container>
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
