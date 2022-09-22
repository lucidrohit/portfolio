import { useAuth } from "../../utils/authContext";
import Login from "./login/login";
import BlogPost from "./blogPost/blogPost";

function Admin() {
  const auth = useAuth();
  if (auth.user && auth.user.email === "lucidrohit@gmail.com") {
    return <BlogPost />;
  }

  return <Login />;
}

export default Admin;
