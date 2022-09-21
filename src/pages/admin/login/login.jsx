import "./login.scss";
import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "./../../../firebase/firebaseConfig";
function Login() {
  const authProvider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    const {user} = await signInWithPopup(auth, authProvider);
    console.log(user);
  };

  return (
    <div>
      <button onClick={handleSignIn}>Login</button>
    </div>
  );
}

export default Login;
