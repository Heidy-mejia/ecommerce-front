import { useEffect, useState } from "react";
import { Genero } from "./components/Genero";
import { Nav } from "./components/nav/Nav";
import { Paises } from "./components/Paises";
import { Marcas } from "./components/Marcas";
import { Categorias } from "./components/categorias"

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  // const [pais, setPais] = useState([]);
  // const [genero, setGenero] = useState([]);
  // const [categoria, setCategoria] = useState([]);
  // const [marca, setMarca] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const USERS_ENDPOINT = "users";
  // const PAIS_ENDPOINT = "pais";
  // const GENERO_ENDPOINT = "genero";
  // const CATEGORIA_ENDPOINT = "categoria";
  // const MARCA_ENDPOINT = "marca";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };
  const getUsers = async () => {
    const response = await fetch(`${API_URL}/${USERS_ENDPOINT}`);
    const data = await response.json();
    setUsers(data);
  };
  // const getPais = async () => {
  //   const response = await fetch(`${API_URL}/${PAIS_ENDPOINT}`);
  //   const data = await response.json();
  //   setPais(data);
  // };
  // const getGenero = async () => {
  //   const response = await fetch(`${API_URL}/${GENERO_ENDPOINT}`);
  //   const data = await response.json();
  //   setGenero(data);
  // };
  // const getCategoria = async () => {
  //   const response = await fetch(`${API_URL}/${CATEGORIA_ENDPOINT}`);
  //   const data = await response.json();
  //   setCategoria(data);
  // };
  // const getMarca = async () => {
  //   const response = await fetch(`${API_URL}/${MARCA_ENDPOINT}`);
  //   const data = await response.json();
  //   setMarca(data);
  // };

  useEffect(() => {
    getProducts();
    getUsers();
    // getPais();
    // getGenero();
    // getCategoria();
    // getMarca();


  }, []);

  const h1style = {
    color: "red",
    fontSize: "60px",
  }

  return (
    <div className="App">
      <Paises />
      <Genero />
      <Categorias />
      <Marcas/>
      <Nav />
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}

      <h1 style={h1style}>usuario</h1>

      {users.map((users: any) => (
        <div key={users.id}>{users.name}</div>
      ))}
      {/* <h1 style={h1style}>pais</h1> */}

      {/* {pais.map((pais: any) => (
        <div key={pais.id}>{pais.name}</div>
      ))}
      <h1 style={h1style}>Genero</h1>

      {genero.map((genero: any) => (
        <div key={genero.id}>{genero.name}</div>
      ))}
      <h1 style={h1style}>categoria</h1>

      {categoria.map((categoria: any) => (
        <div key={categoria.id}>{categoria.name}</div>
      ))}
      {marca.map((marca: any) => (
        <div key={marca.id}>{marca.name}</div>
      ))} */}
      
      
      

    </div>
  );
}


export default App;
