import "./login.scss";
import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "./../../../firebase/firebaseConfig";

import { useAuth } from "../../../utils/authContext";

function Login() {
  const authProvider = new GoogleAuthProvider();
  const authUser = useAuth();

  const handleSignIn = async () => {
    const { user } = await signInWithPopup(auth, authProvider);
    await authUser.login(user);
  };

  return (
    <div className="login">
      <button onClick={handleSignIn} className="btn login_btn">Login</button>
    </div>
  );
}

export default Login;
