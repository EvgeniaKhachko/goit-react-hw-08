import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const minUsernameLength = 2;
const maxUsernameLength = 50;
const minPhoneLength = 5;
const maxPhoneLength = 9;
const ValidationDataSchema = Yup.object().shape({
  username: Yup.string()
    .min(
      minUsernameLength,
      `Username too short, must be longer than ${minUsernameLength}`
    )
    .max(maxUsernameLength, `Username too long, limit ${maxUsernameLength}`)
    .required("Username Required"),
  phone: Yup.string()
    .min(minPhoneLength, `Too short! Min ${minPhoneLength} characters`)
    .max(maxPhoneLength, `Too long! Max allowed ${maxPhoneLength} characters`)
    .required("Phone Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.username,
      number: values.phone,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationDataSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.field} type="text" name="username" />
          <ErrorMessage name="username" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.field} type="tel" name="phone" />
          <ErrorMessage name="phone" component="span" className={s.error} />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
