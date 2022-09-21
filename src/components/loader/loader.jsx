import "./loader.scss";
import { PuffLoader } from "react-spinners";
function Loader() {
  return (
    <div className="loader blogs__blog">
      <PuffLoader color="#8153e2" />
    </div>
  );
}

export default Loader;
