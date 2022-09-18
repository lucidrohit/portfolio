import "./iconLink.scss";

function IconLink({ text, link, logo }) {
  return (
    <a href={link} className="iconLink" aria-label={text}>
      <i
        style={{ backgroundImage: `url(${logo})` }}
        className="logo"
        alt={text}
      />
    </a>
  );
}

export default IconLink;
