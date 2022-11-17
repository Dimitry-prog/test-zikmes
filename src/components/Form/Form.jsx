import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import useFormValidation from "../../hooks/UseFormValidation";
import styles from './Form.module.scss';
import {useAppContext} from "../../context/AppContext";

const Form = () => {
  const {values, errors, isValid, handleChange} = useFormValidation();
  const {handleSubmit} = useAppContext();

  return (
    <form
          onSubmit={handleSubmit}
          noValidate
          className={`${styles.form} form`}
    >
      <h3 className="form__title">Тест ЗИКМЕС</h3>
      <div className={styles.form__wrap}>
          <input
            value={values.email || ''}
            onChange={handleChange}
            type="email"
            className="input form__input form__input_type_name"
            name="email"
            required
            id="name"
            placeholder="Enter name..."/>
          <span>{errors.email}</span>
          <div className={styles.form__wrap_btn}>
            <button type="submit" disabled={!isValid}>
              Заказать
              <FontAwesomeIcon icon={faBasketShopping}/>
            </button>
          </div>
      </div>
    </form>
  );
};

export default Form;