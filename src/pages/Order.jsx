import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OrderForm from "../components/OrderForm/OrderForm";

function Order ({navs}) {
    return (
        <>
        <Header items={navs}/>
        <OrderForm/>
        <Footer/>
        </>
    )
}

export default Order;