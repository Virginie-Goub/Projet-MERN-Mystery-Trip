import React, { useState } from "react";
import "./connexion.css";
function Connexion() {
  const [login, setLogin] = useState({});
  function data(e) {
    let co = {
      ...login,
      [e.target.name]: e.target.value,
    };
    setLogin(co);
  }
  const handleConnexion = () => {
    console.log(login);
    const url = "http://localhost:5555/users/connexion"; //je créer l'url de stockage
    fetch(url, {
      //fetch est une fonction qui recupère et qui envoie le newContent
      method: "POST", //utilisation de post pour ENVOYER dans localhost
      headers: {
        Accept: "application/json", //langage utilisé pour l'échange de données
        "Content-Type": "application/json", //c'est une definition de ce qui est envoyé //le header est l'element qui defini la strusture du message
        authorization: "bearer token",
      },
      body: JSON.stringify(login), //stringify me permet de transformer mes information en chaine de text
    })
      .then((value) => value.json())
      .then((value2) => console.log(value2));
  };

  return (
    <div id="connexion">
      <h2 className="titleConnexion">SE CONNECTER A MON COMPTE</h2>
      <div>
        <input onChange={data} name="email" type="text" placeholder="Email" />
      </div>
      <br></br>
      <br></br>
      <div>
        <input
          onChange={data}
          name="password"
          type="text"
          placeholder="password"
        />
      </div>
      <div>
        <br></br>
        <br></br>
        <button onClick={handleConnexion}>CONNEXION</button>
      </div>
    </div>
  );
}

export default Connexion;
