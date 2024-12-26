import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
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
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.field}
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
          <Field
            className={s.field}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Field
            className={s.field}
            name="password"
            type="password"
            placeholder="Enter password"
            required
          />
          <div className={s.buttonBox}>
            <button className={s.button} type="submit">
              <span>Register</span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
