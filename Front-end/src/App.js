import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Connexion from "./components/Connexion/Connexion";
import photoOne from "./images/franceOne.png";
import photoTwo from "./images/franceTwo.jpeg";
import photoThree from "./images/franceThree.jpeg";
import photoFour from "./images/italie.jpeg";
import photoFive from "./images/suede.jpeg";
import photoSix from "./images/londres.jpeg";
import photoSeven from "./images/afrique.jpeg";
import photoEight from "./images/bresil.jpeg";
import photoNine from "./images/japon.png";
import Formules from "./components/Formules/Formules";
/*import logo2 from "./images/logo2.jpeg";*/

import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
import "./app.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <nav id="navbar">
            <h1 className="titleNavBar">Mystery Trip</h1>
            {/*<img className="logo" alt="" src={logo2}></img>*/}
            <div className="liElem">
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/connexion">Connexion</Link>
                </li>
                <li>
                  <Link to="/formules">Formules</Link>
                </li>
                <li>
                  <Link to="/quote">Questionnaire</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*home page*/}
          <Route exact path="/">
            <Home />
            <Contact />
          </Route>

          {/*signup page*/}
          <Route path="/signup">
            <Signup />
          </Route>

          {/*connexion page*/}
          <Route path="/connexion">
            <Connexion />
          </Route>

          {/*formules page*/}
          <Route path="/formules">
            <div id="formulesContainer">
              <Formules
                title="Voyagez en France"
                price="A partir de 350€ 3jours/2nuits"
                content="Envie de faire un break pour un weekend prolongé vers une destination mystère de rêve en Europe ?
                A partir de 3 jours/ 2 nuits, vous pouvez dès à présent vous envoler vers une 
                destination surprise en Europe pour un séjour insolite et teinté de mystère.
                "
                imageone={photoOne}
                imagetwo={photoTwo}
                imagethree={photoThree}
                button={<Link to="/quote">Envie de flâner en France?</Link>}
              />

              <Formules
                title="Voyagez en Europe"
                price="A partir de 650€ 5jours/4nuits"
                content="Plutôt tenté(s) par un séjour plus long dans une fabuleuse destination surprise …. quelque part en Europe.
                A partir de 7 jours/6 nuits, vous pouvez également vous envoler vers une 
                destination de choix en Europe pour des vacances hors du commun!"
                imagefour={photoFour}
                imagefive={photoFive}
                imagesix={photoSix}
                button={
                  <Link to="/quote">Envie de vous évader en Europe?</Link>
                }
              />

              <Formules
                title="Voyagez dans le Monde"
                price="A partir de 1250€ 6jours/5nuits"
                content="Vous rêvez de vacances plus exotiques, dépaysantes et originales en dehors de l’Europe !
                A partir de 10 jours/9 nuits, vous pouvez dès à présent vous envoler vers une destination mystère
                  paradisiaque hors Europe pour des vacances inoubliables!"
                imageseven={photoSeven}
                imageeight={photoEight}
                imagenine={photoNine}
                button={
                  <Link to="/quote">
                    Envie de vous envoler au bout du monde
                  </Link>
                }
              />
            </div>
          </Route>

          {/*quote page*/}
          <Route path="/quote">
            <Quote />
          </Route>

          {/*contact page*/}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
