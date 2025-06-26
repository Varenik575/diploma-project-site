import s from "./Product.module.css";

function Product({ name, description, url }) {
  return (
      <div className={s.productWrapper}>
        <img src={url} width="300" height="190" alt="" />
        <span>{name}</span>
        <p>{description}</p>
      </div>
  );
}

export default Product;
