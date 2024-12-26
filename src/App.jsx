import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import "modern-normalize";

import Layout from "./Layout";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    document.body.style.background =
      "radial-gradient(circle, rgba(165, 252, 70, 1) 0%, rgba(63, 94, 251, 0.7511379551820728) 100%)";

    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  });

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
