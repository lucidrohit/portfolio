import "./button.scss";

function Button({ link, text, children }) {
  return (
    <a className="btn" href={link}>
      {text} {children}
    </a>
  );
}

export default Button;
