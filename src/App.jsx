import Banner from "./components/Banner";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Produtos from "./components/Produtos";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Layout />
      <Produtos />
    </>
  );
}
