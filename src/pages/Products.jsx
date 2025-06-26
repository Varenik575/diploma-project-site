import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";

function Products({ navs, products }) {
  return (
    <>
      <Header items={navs} />
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export default Products;
