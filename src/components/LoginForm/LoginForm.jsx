import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            className={s.field}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <ErrorMessage name="email" component="span" className={s.error} />

          <Field
            className={s.field}
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <ErrorMessage name="password" component="span" className={s.error} />
          <div className={s.buttonBox}>
            <button className={s.button} type="submit">
              <span>Login</span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
