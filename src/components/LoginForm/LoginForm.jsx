import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import {} from "react-icons/lu";

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
    <div className={s.forma}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={s.label}>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" className={s.error} />

          <label className={s.label}>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" className={s.error} />

          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
