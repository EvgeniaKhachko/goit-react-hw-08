import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
      })
      .catch(() => {
        toast.error(`Error On Registration, Try Again Later`);
      });
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={css.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field
            className={css.field}
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
          <Field
            className={css.field}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Field
            className={css.field}
            name="password"
            type="password"
            placeholder="Enter password"
            required
          />
          <div className={css.buttonBox}>
            <button className={css.button} type="submit">
              <span>Register</span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
