import "./App.css";
import Header from "./components/Header/Header";
import OrderForm from "./components/OrderForm/OrderForm";
import Footer from "./components/Footer/Footer";

const DEFAULT_NAVLIST_ITEMS = [
  { id: "1", url: "url", text: "Головна" },
  { id: "3", url: "url", text: "Каталог" },
  { id: "2", url: "url", text: "Замовлення" },
  { id: "4", url: "url", text: "Контакти" }
];

function App() {
  return (
    <>
      <Header items={DEFAULT_NAVLIST_ITEMS} />
      <OrderForm />
      <Footer/>
    </>
  );
}

export default App;
