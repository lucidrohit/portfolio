import "./link.scss";

function Link({ link, text }) {
  return <a href={link}>{text}</a>;
}

export default Link;
