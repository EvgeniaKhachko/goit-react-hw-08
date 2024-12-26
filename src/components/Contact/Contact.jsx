import React from "react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <div className={s.div}>
      <p className={s.user}> {name}</p>
      <p className={s.user}>{number}</p>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Contact;
