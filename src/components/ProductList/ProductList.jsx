import s from "./ProductList.module.css";
import Product from "../Product/Product";

function ProductList({ products }) {
  return (
    <ul className={s.list}>
      {products.map((product) => {
        return (
          <li className={s.listElement}>
            <Product
              key={product.id}
              name={product.name}
              url={product.url}
              description={product.description}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;