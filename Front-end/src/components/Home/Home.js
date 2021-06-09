import "./home.css";
/*import dessinone from ;*/
import dessintwo from "../../images/devis.jpeg";
import dessinthree from "../../images/lire.jpeg";
import dessinfour from "../../images/depart.jpeg";

/*Menu component*/

function Home(props) {
  return (
    <div>
      {/*<h2 className="titleTwo">Comment ça marche?</h2>*/}

      <article id="fonctionnement">
        <div className="do">
          <h3 className="titleHome">1. Je réponds au questionnaire</h3>
          <p className="contentHome">
            Vos réponses vont nous permettre de créer un voyage adapté à vos
            envies !
          </p>
          <img className="imageHome" alt="" src="images/ordi.jpeg"></img>
        </div>

        <div className="do">
          <h3 className="titleHome">2. Je reçois mon devis par mail</h3>
          <p className="contentHome">
            Dans un délai de 1 à 2 semaines maximum, en fonction de vos choix.
          </p>
          <img className="imageHome" alt="" src={dessintwo}></img>
        </div>

        <div className="do">
          <h3 className="titleHome">3. Je reçois toutes les infos</h3>
          <p className="contentHome">
            2 semaines avant le départ (à mettre dans ma valise, prévisions
            météo etc...)
          </p>
          <img className="imageHome" alt="" src={dessinthree}></img>
        </div>

        <div className="do">
          <h3 className="titleHome">4. Et c’est parti pour du rêve!</h3>
          <p className="contentHome">
            Le jour de votre départ, nous levons le voile sur le nom de votre
            destination !
          </p>
          <img className="imageHome" alt="" src={dessinfour}></img>
        </div>
      </article>
    </div>
  );
}

export default Home;
