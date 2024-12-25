import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { fetchAllContacts } from "../../redux/contacts/operations";

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={s.contact}>
        {contacts.map((contact) => (
          <li className={s.contacts} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
