import "./quote.css";

import { useState } from "react";

/*Devis*/
function Quote() {
  const [newQuote, setNewQuote] = useState({});

  function updatedNewQuote(event) {
    let updatedNewQuote = {
      ...newQuote,
      [event.target.name]: event.target.value,
    };

    setNewQuote(updatedNewQuote);
  }

  const handleSubmit = () => {
    console.log(newQuote);
    const url = "http://localhost:5555/quote/quote";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNewQuote),
    })
      .then((value) => value.json())
      .then((value2) => console.log(value2));
  };
  console.log(newQuote);

  return (
    <form id="quote">
      <h2 className="titleQuote">
        Lancez vous dans l'aventure de Mystery Trip !
      </h2>
      <h3 className="subtitleQuote">
        Nous vous contacterons d'ici quelques jours par mail
      </h3>

      {/* CHOISIR FORMULE */}
      <label htmlFor="formuleSelect">Choisissez une formule:</label>
      <select
        className="formules"
        id="formuleSelect"
        name="formule"
        onChange={updatedNewQuote}
      >
        <option value="">--Choisir votre formule--</option>
        <option value="france">France</option>
        <option value="europe">Europe</option>
        <option value="monde">Monde</option>
      </select>

      <br />
      <br />

      {/* DATE DEPART */}

      <label htmlFor="start">Date de départ:</label>
      <input
        type="date"
        id="start"
        name="start"
        onChange={updatedNewQuote}
      ></input>

      {/* DATE RETOUR */}

      <label htmlFor="end">Date de retour:</label>
      <input type="date" id="end" name="end" onChange={updatedNewQuote}></input>

      <br />
      <br />

      {/* TYPE VOYAGE */}

      <label htmlFor="typeTravelSelect">
        Choisissez de partir seul, en couple, en famille ou en groupe:
      </label>
      <select
        className="typeTravelSelect"
        id="typeTravelSelect"
        name="typeTravel"
        onChange={updatedNewQuote}
      >
        <option value="">--Choisir--</option>
        <option value="solo">En solo</option>
        <option value="couple">En couple</option>
        <option value="famille">En Famille</option>
        <option value="groupe">En groupe</option>
      </select>

      {/* NOMBRE DE PARTICPANTS */}
      <p>Nombre de participants:</p>
      <label htmlFor="adults">Adultes</label>
      <input
        type="number"
        id="adults"
        min="1"
        max="100"
        name="adult"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="childrens" value="childrens">
        Enfants
      </label>
      <input
        type="number"
        id="childrens"
        min="1"
        max="100"
        name="childrens"
        onChange={updatedNewQuote}
      ></input>

      <br />
      <br />

      {/* BUDGET */}

      <label htmlFor="budget">Votre budget :</label>
      <input
        type="budget"
        id="budget"
        name="budget"
        onChange={updatedNewQuote}
      ></input>

      <br />
      <br />

      {/* AEROPORT DE DEPART */}

      <label htmlFor="aeroportSelect">
        Choisissez votre aéroport de départ:
      </label>
      <select
        className="aeroportSelect"
        id="aeroportSelect"
        name="aeroport"
        onChange={updatedNewQuote}
      >
        <option value="">--Choisir aéroport--</option>
        <option value="lyon">Lyon</option>
        <option value="marseille">Marseille</option>
        <option value="nantes">Nantes</option>
        <option value="nice">Nice</option>
        <option value="paris">Paris</option>
        <option value="toulouse">Toulouse</option>
      </select>

      <br />
      <br />

      {/* CHOIX THEMES */}

      <p>Selectionnez au maximum 3 thèmes :</p>
      <input
        type="checkbox"
        id="nature"
        value="nature"
        name="nature"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="nature">Nature</label>

      <input
        type="checkbox"
        id="decouverte"
        value="decouverte"
        name="decouverte"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="decouverte">Découverte</label>

      <input
        type="checkbox"
        id="culture"
        value="culture"
        name="culture"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="culture">Culture</label>

      <input
        type="checkbox"
        id="sport"
        value="sport"
        name="sport"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="sport">Sport</label>

      <br />
      <br />

      <input
        type="checkbox"
        id="shopping"
        value="shopping"
        name="shopping"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="shopping">Shopping</label>

      <input
        type="checkbox"
        id="gastronomie"
        value="gastronomie"
        name="gastronomie"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="gastronomie">Gastronomie</label>

      <input
        type="checkbox"
        id="farniente"
        value="farniente"
        name="farniente"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="farniente">Farniente</label>

      <input
        type="checkbox"
        id="fiesta"
        value="fiesta"
        name="fiesta"
        onChange={updatedNewQuote}
      ></input>
      <label htmlFor="fiesta">Fiesta</label>

      <br />
      <br />

      {/* CHOIX LOGEMENT */}

      <label htmlFor="logementSelect">
        Choisissez le lieu dans lequel vous souhaitez séjourner:
      </label>
      <select
        className="logementSelect"
        id="logementSelect"
        name="logement"
        onChange={updatedNewQuote}
      >
        <option value="">--Choisir le type de logement--</option>
        <option value="hotel">Hotel</option>
        <option value="appart">Appartement</option>
        <option value="maison">Maison</option>
        <option value="anyway">Peu importe</option>
      </select>

      <br />
      <br />

      <label htmlFor="logementSelect">
        Températures souhaitées (sous réserve de la méteo) :
      </label>
      <br />
      <br />

      {/* CHOIX TEMPERATURE*/}

      <select
        className="tempSelect"
        id="tempSelect"
        name="temperature"
        onChange={updatedNewQuote}
      >
        <option value="">--Choisir la temperature--</option>
        <option value="cold">Entre 0 et 15</option>
        <option value="normal">Entre 15 et 25 </option>
        <option value="hot">Entre 25 et 30</option>
        <option value="anywayTwo">Peu importe</option>
      </select>
      <br />
      <br />

      <button onClick={handleSubmit}>VALIDER</button>
    </form>
  );
}

export default Quote;
