import "./formules.css";

/*Formules France, europe et monde*/
function Formules(props) {
  return (
    <article id="formules">
      <div>
        <h3 className="title">{props.title}</h3>
        <h2 className="price">{props.price}</h2>
        <p className="content">{props.content}</p>

        <img className="photo" alt="" src={props.imageone}></img>
        <img className="photo" alt="" src={props.imagetwo}></img>
        <img className="photo" alt="" src={props.imagethree}></img>
        <img className="photo" alt="" src={props.imagefour}></img>
        <img className="photo" alt="" src={props.imagefive}></img>
        <img className="photo" alt="" src={props.imagesix}></img>
        <img className="photo" alt="" src={props.imageseven}></img>
        <img className="photo" alt="" src={props.imageeight}></img>
        <img className="photo" alt="" src={props.imagenine}></img>
        <br></br>
        <br></br>
        <button className="button">{props.button}</button>
      </div>
    </article>
  );
}

export default Formules;
