import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>We would love to hear <span> from you </span></h2>

          <ContactForm />
        </section>
      </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.7940433496128!2d74.50917934547323!3d20.55854649053141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde99b980a72691%3A0x2670392bc1c3ce16!2sMalegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691911547326!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
  );
};

export default Contact;