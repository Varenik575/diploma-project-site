import { Formik, Form, Field } from "formik";
import { useId } from "react";

import s from "./OrderForm.module.css";

const OrderForm = () => {
  const INITIAL_VALUES = {
    client: "",
    name: "",
    number: "",
    email: "",
    fax: "",
    house_number: "",
    street: "",
  };

  const clientId = useId();
  const nameId = useId();
  const numberId = useId();
  const emailId = useId();
  const faxId = useId();
  const houseId = useId();
  const streetId = useId();
  const cityId = useId();
  const countryId = useId();
  const postalId = useId();
  const deliveryId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={s.form}>
<div name="contactSection" className={s.formSection}>
    <span>Контакт:</span>
        <div>
          <label htmlFor="client">Замовник:</label>
          <Field type="text" name="client" id={clientId} />
        </div>

        <div>
          <label htmlFor="name">Контактна особа:</label>
          <Field type="text" name="name" id={nameId} />
        </div>

        <div>
          <label htmlFor="number">Телефон:</label>
          <Field type="text" name="number" id={numberId} />
        </div>

        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <Field type="email" name="email" id={emailId} />
        </div>

        <div>
          <label htmlFor="fax">Факс:</label>
          <Field type="text" name="fax" id={faxId} />
        </div>
</div>
        <div name="addressSection" className={s.formSection} >
            <span>Адреса:</span>
          <div>
            <label htmlFor="house_number">Номер дому:</label>
            <Field type="text" name="house_number" id={houseId} />
          </div>

          <div>
            <label htmlFor="street">Вулиця:</label>
            <Field type="text" name="street" id={streetId} />
          </div>

          <div>
            <label htmlFor="city">Місто або населений пункт:</label>
            <Field type="text" name="city" id={cityId} />
          </div>

          <div>
            <label htmlFor="country">Країна</label>
            <Field type="text" name="country" id={countryId} />
          </div>

          <div>
            <label htmlFor="postal_index">Поштовий індекс:</label>
            <Field type="text" name="postal_index" id={postalId} />
          </div>

          <div>
            <label htmlFor="delivery_specifics">Примітки щодо доставки:</label>
            <Field as="textarea" name="delivery_specifics" id={deliveryId} />
          </div>
        </div>

        <button type="submit">Залишити замовлення</button>
      </Form>
    </Formik>
  );
};

export default OrderForm;
