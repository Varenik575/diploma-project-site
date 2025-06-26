import "./App.css";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/Order";
import Products from "./pages/Products";

const DEFAULT_NAVLIST_ITEMS = [
  { id: "1", url: "/main", text: "Головна" },
  { id: "3", url: "/products", text: "Каталог" },
  { id: "2", url: "/", text: "Замовлення" },
  { id: "4", url: "/contacts", text: "Контакти" },
];

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    url: "src/assets/order_blister_curl.jpg",
    name: "Пакування типу 'Пенал'",
    description: "тут буде опис товару",
  },
  {
    id: 2,
    url: "src/assets/order_blister_no_curl.jpg",
    name: "Пакування типу 'Під запайку'",
    description: "тут буде опис товару",
  },
  {
    id: 3,
    url: "src/assets/order-blister-correcs.jpg",
    name: "Пакування типу 'Корекс'",
    description: "тут буде опис товару",
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Order navs={DEFAULT_NAVLIST_ITEMS} />} />
        <Route
          path="/products"
          element={
            <Products
              navs={DEFAULT_NAVLIST_ITEMS}
              products={DEFAULT_PRODUCTS}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
