import "./signup.css";
import { useState } from "react";

/*S'inscrire sur le site*/

function Signup() {
  const [newSignup, setnewSignup] = useState({});
  function handleData(e) {
    let inscription = {
      ...newSignup,
      [e.target.name]: e.target.value,
    };
    setnewSignup(inscription);
  }
  const handleSignup = () => {
    console.log(newSignup);
    const url = "http://localhost:5555/users/signUp"; //je créer l'url de stockage
    fetch(url, {
      //fetch est une fonction qui recupère et qui envoie le newContent
      method: "POST", //utilisation de post pour ENVOYER dans localhost
      headers: {
        Accept: "application/json", //langage utilisé pour l'échange de données
        "Content-Type": "application/json", //c'est une definition de ce qui est envoyé //le header est l'element qui defini la strusture du message
        authorization: "bearer token",
      },
      body: JSON.stringify(newSignup), //stringify me permet de transformer mes information en chaine de text
    });
  };

  return (
    <div id="newTraveler">
      <h2 className="titleSignup">INSCRIPTION</h2>

      <input
        type="text"
        name="lastname"
        placeholder="Nom"
        onChange={handleData}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        onChange={handleData}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleData}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleData}
      />
      <br></br>
      <br></br>

      <button className="valider" onClick={handleSignup}>
        VALIDER
      </button>
    </div>
  );
}

export default Signup;

/*function Signup() {
  const [newSignup, setnewSignup] = useState({});

  function Signup() {
  const [newSignup, setnewSignup] = useState({});
  function data(e) {
    let inscription = {
      ...newSignup,
      [e.target.name]: e.target.value,
    };
    setnewSignup(inscription);
  }

  let handleSubmit = () => {
    const url = "http://localhost:8000/user/signup";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNewSignup),
    })
      .then((value) => value.json())
      .then((value2) => console.log(value2));
  };

  return (
    <form id="newTraveler">
      <h2 className="titleSignup">INSCRIPTION</h2>

      <input
        type="text"
        name="lastname"
        placeholder="Nom"
        value={newSignup.lastname}
        onChange={updatedNewSignup}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={newSignup.firstname}
        onChange={updatedNewSignup}
      />

      <br></br>
      <br></br>

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={newSignup.email}
        onChange={updatedNewSignup}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        name="password"
        placeholder="password"
        value={newSignup.password}
        onChange={updatedNewSignup}
      />
      <br></br>
      <br></br>

      <button className="valider" onClick={handleSubmit}>
        VALIDER
      </button>
    </form>
  );
}

export default Signup;*/
