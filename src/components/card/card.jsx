import "./card.scss";

function Card({ logo, heading, content, projectLink, ...rest }) {
  return (
    <a href={projectLink} className="card" {...rest}>
      <div className="card__thumbnail">
        <img src={logo} alt={heading} />
      </div>
      <div className="card__content">
        <span className="content__title">{heading}</span>
        <p className="card__content__text">{content}</p>
      </div>
    </a>
  );
}

export default Card;
