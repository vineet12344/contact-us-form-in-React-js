import React from "react";
import styles from "./contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  let [name, setName] = useState("Vineet Salve ");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");

  const onSubmit = (event) => {
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({ name, email, text });

    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FiPhoneCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              style={{ padding: "10px" }}
              rows={8}
              type="text"
              name="text"
            />
          </div>

          <div className={styles.submit_btn_container}>
            <Button text="SUBMIT" />
          </div>
          <div>{name + "" + email + "" + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/public/images/girl.png" alt="image" srcset="" />
      </div>
    </section>
  );
};

export default ContactForm;
