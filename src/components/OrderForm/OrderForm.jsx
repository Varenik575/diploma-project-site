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
    city: "",
    country: "",
    postal_index: "",
    delivery_specifics: "",
    shape: "",
    width: "",
    length: "",
    useful_width: "",
    useful_length: "",
    useful_height: "",
    film_thickness: "",
    logo_info: "",
    corners: "",
    euroloop: "",
    corex_color: "",
    quantity: "",
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

  const shapeId = useId();
  const widthId = useId();
  const lengthId = useId();
  const usefulWidthId = useId();
  const usefulLengthId = useId();
  const usefulHeightId = useId();
  const filmThicknessId = useId();

  const logoInfoId = useId();
  const cornersId = useId();
  const euroloopId = useId();
  const colorId = useId();
  const quantityId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <fieldset name="contactSection" className={s.formSection}>
          <span>Контакт:</span>
          <div className={s.formElement}>
            <label htmlFor="client">Замовник:</label>
            <Field
              className={s.formField}
              type="text"
              name="client"
              id={clientId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="name">Контактна особа:</label>
            <Field
              className={s.formField}
              type="text"
              name="name"
              id={nameId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="number">Телефон:</label>
            <Field
              className={s.formField}
              type="text"
              name="number"
              id={numberId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="email">Електронна пошта:</label>
            <Field
              className={s.formField}
              type="email"
              name="email"
              id={emailId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="fax">Факс:</label>
            <Field className={s.formField} type="text" name="fax" id={faxId} />
          </div>
        </fieldset>
        <fieldset name="addressSection" className={s.formSection}>
          <span>Адреса:</span>
          <div className={s.formElement}>
            <label htmlFor="house_number">Номер дому:</label>
            <Field
              className={s.formField}
              type="text"
              name="house_number"
              id={houseId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="street">Вулиця:</label>
            <Field
              className={s.formField}
              type="text"
              name="street"
              id={streetId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="city">Місто або населений пункт:</label>
            <Field
              className={s.formField}
              type="text"
              name="city"
              id={cityId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="country">Країна</label>
            <Field
              className={s.formField}
              type="text"
              name="country"
              id={countryId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="postal_index">Поштовий індекс:</label>
            <Field
              className={s.formField}
              type="text"
              name="postal_index"
              id={postalId}
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="delivery_specifics">Примітки щодо доставки:</label>
            <Field
              className={s.formField}
              as="textarea"
              name="delivery_specifics"
              rows="7"
              id={deliveryId}
            />
          </div>
        </fieldset>

        <fieldset name="orderSection" className={s.formSection}>
          <div className={s.formElement}>
            <label htmlFor="shape">
              Розрахунок вартості блістерної упаковки без загинання:
            </label>
            <Field type="radio" name="shape" value="uncurled" id={shapeId} />
            <img
              src="src/assets/order_blister_no_curl.jpg"
              alt="Картинка - креслення пакування типу 'під запайку'"
              width="300"
              height="190"
            />
          </div>
          <div className={s.formElement}>
            <label htmlFor="shape">
              Розрахунок вартості блістерної упаковки із загинанням (типу
              «пенал»):
            </label>
            <Field type="radio" name="shape" value="curled" id={shapeId} />
            <img
              src="src/assets/order_blister_curl.jpg"
              alt="Картинка - креслення пакування типу 'пенал'"
              width="300"
              height="183"
            />
          </div>

          <div className={s.formElement}>
            <label htmlFor="shape">
              Розрахунок вартості блістерної упаковки – корекc:
            </label>
            <Field type="radio" name="shape" value="corex" id={shapeId} />
            <img
              width="300"
              height="190"
              src="src/assets/order-blister-correcs.jpg"
              alt="Картинка - креслення пакування типу 'корекс'"
            />
          </div>

          <div>
            <div className={s.formElement}>
              <label htmlFor="width">1. Ширина блістера (A), мм</label>
              <Field
                className={s.formField}
                type="number"
                name="width"
                id={widthId}
              />
            </div>

            <div className={s.formElement}>
              <label htmlFor="length">2. Довжина блістера (B), мм</label>
              <Field
                className={s.formField}
                type="number"
                name="length"
                id={lengthId}
              />
            </div>

            <div className={s.formElement}>
              <label htmlFor="useful_width">
                3. Ширина корисної частини (a), мм
              </label>
              <Field
                className={s.formField}
                type="number"
                name="useful_width"
                id={usefulWidthId}
              />
            </div>

            <div className={s.formElement}>
              <label htmlFor="useful_length">
                4. Довжина корисної частини (b), мм
              </label>
              <Field
                className={s.formField}
                type="number"
                name="useful_length"
                id={usefulLengthId}
              />
            </div>

            <div className={s.formElement}>
              <label htmlFor="useful_height">
                5. Висота корисної частини (c), мм
              </label>
              <Field
                className={s.formField}
                type="number"
                name="useful_height"
                id={usefulHeightId}
              />
            </div>

            <div className={s.formElement}>
              <label htmlFor="film_thickness">
                6. Товщина плівки (-), мм (0.20 – 1.00 мм)
              </label>
              <Field
                className={s.formField}
                type="number"
                name="film_thickness"
                step="any"
                min="0.2"
                max="1"
                id={filmThicknessId}
              />
            </div>
            <span>Інші умови:</span>
            <div className={s.formElement}>
              <label htmlFor="logo_info">1. Логотип на блістері: </label>
              <label htmlFor="logo_info">
                з логотипом
                <Field
                  type="radio"
                  name="logo_info"
                  value="yes"
                  id={logoInfoId}
                />
              </label>
              <label htmlFor="logo_info">
                без логотипу
                <Field
                  type="radio"
                  name="logo_info"
                  value="no"
                  id={logoInfoId}
                />
              </label>
            </div>

            <div className={s.formElement}>
              <label htmlFor="corners">2. Краї блістера: </label>
              <label htmlFor="corners">
                округлені
                <Field
                  type="radio"
                  name="corners"
                  value="rounded"
                  id={cornersId}
                />
              </label>
              <label htmlFor="corners">
                прямі
                <Field
                  type="radio"
                  name="corners"
                  value="straight"
                  id={cornersId}
                />
              </label>
            </div>

            <div className={s.formElement}>
              <label htmlFor="euroloop">3. Просічення "Європетля":</label>
              <label htmlFor="euroloop">
                Є
                <Field
                  type="radio"
                  name="euroloop"
                  value="yes"
                  id={euroloopId}
                />
              </label>
              <label htmlFor="euroloop">
                Ні
                <Field
                  type="radio"
                  name="euroloop"
                  value="no"
                  id={euroloopId}
                />
              </label>
            </div>

            <div className={s.formElement}>
              <label htmlFor="corex_color">4. Колір корексу :</label>
              <label htmlFor="corex_color">
                Прозорий
                <Field
                  type="radio"
                  name="corex_color"
                  value="clear"
                  id={colorId}
                />
              </label>
              <label htmlFor="corex_color">
                <Field
                  type="radio"
                  name="corex_color"
                  value="colored"
                  id={colorId}
                />{" "}
                Кольоровий
              </label>
            </div>

            <div className={s.formElement}>
              <label htmlFor="quantity">5. Кількість, шт</label>
              <Field
                className={s.formField}
                type="number"
                name="quantity"
                id={quantityId}
              />
            </div>
          </div>
        </fieldset>

        <button className={s.formButton} type="submit">
          Залишити замовлення
        </button>
      </Form>
    </Formik>
  );
};

export default OrderForm;

//
//
//
//1. Просічення "Європетля":   	Є Ні
//1. Колір корексу : 	Прозорий Кольоровий
//

// Інші умови:

// 3. Кількість
