import logo from "./logo.svg";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Recommended from "./Recommended/Recommended";

function App() {
  return (
    <>
     <Sidebar />
      <Nav />
      <Recommended />
      <Products />
     
    </>
  );
}

export default App;
