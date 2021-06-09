import "./contact.css";
import { useState } from "react";

/*Formulaire de contact à la fin*/

function Contact() {
  const [newContact, setnewContact] = useState({});

  function updatednewContact(event) {
    let updatednewContact = {
      ...newContact,
      [event.target.name]: event.target.value,
    };

    setnewContact(updatednewContact);
  }

  const handleSubmit = () => {
    console.log(newContact);
    const url = "http://localhost:5555/contact"; //je créer l'url de stockage
    fetch(url, {
      //fetch est une fonction qui recupère et qui envoie le newContent
      method: "POST", //utilisation de post pour ENVOYER dans localhost
      headers: {
        Accept: "application/json", //langage utilisé pour l'échange de données
        "Content-Type": "application/json", //c'est une definition de ce qui est envoyé //le header est l'element qui defini la strusture du message
        authorization: "bearer token",
      },
      body: JSON.stringify(newContact), //stringify me permet de transformer mes information en chaine de text
    })
      .then((value) => value.json())
      .then((value2) => console.log(value2));
  };

  return (
    <div id="contact">
      <h2 className="titleForm">CONTACTEZ-NOUS</h2>

      <input
        type="text"
        name="lastname"
        placeholder="Nom"
        onChange={updatednewContact}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        onChange={updatednewContact}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={updatednewContact}
      />

      <br></br>
      <br></br>

      <textarea
        type="text"
        name="message"
        placeholder="Votre message"
        onChange={updatednewContact}
      ></textarea>
      <br></br>
      <br></br>

      <button className="addMessage" onClick={handleSubmit}>
        VALIDER
      </button>
    </div>
  );
}

export default Contact;
