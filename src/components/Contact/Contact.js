import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css'

function Contact(props){
  const form = useRef();

  const [headingSize, setHeadingSize] = useState('0.25rem');

  useEffect(()=>{
    setHeadingSize('2.5rem')
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'user_TPVDGHy8E91O3PklUpkSK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Thank you for reaching out to me!")
  };

  return (
  <div className={styles.contactContent}>
    <div className={styles.headingContainer}>
      <h3 id={styles.contactHeading} style={{fontSize: headingSize}}>CONTACT ME</h3> 
    </div>

    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      
      <input 
        type="text" 
        name="user_name" 
        className={styles.contactInput} 
        id={styles.name}
        placeholder="Name"
      />

      <input 
        type="email" 
        name="user_email" 
        className={styles.contactInput} 
        id={styles.email}
        placeholder="Email"
      />

      <textarea 
        name="message" 
        className={styles.contactInput} 
        id={styles.message}
        placeholder="Message"
      />


      <input type="submit" value="Send" className={styles.contactBtn}/>
    </form>
  </div>

  );
};

export default Contact;