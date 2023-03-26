import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useLayoutEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/navBar/navBar";
import Home from "./pages/home/home";
import Loader from "./components/loader/loader";
import ErrorRoute from "./components/errorRoute/errorRoute";
import AuthProvider from "./utils/authContext";
import Cursor from "./components/common/cursor/cursor";

const About = lazy(() => import("./pages/about/about"));
const Projects = lazy(() => import("./pages/projects/projects"));
const Blogs = lazy(() => import("./pages/blogs/blogs"));
const Blog = lazy(() => import("./pages/blog/blog"));
const Admin = lazy(() => import("./pages/admin/admin"));

function App() {
  const [showCursor, setShowCursor] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 700, offset: "500px" });
  },[]);

  useLayoutEffect(()=>{
    if(window.innerWidth>=700) setShowCursor(true)
  },[])
  return (
    <div className="App">
      {showCursor && <Cursor/>}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs">
              <Route index element={<Blogs />} />
              <Route path=":blogId" element={<Blog />} />
            </Route>
            <Route path="/projects" element={<Projects />} />

            <Route
              path="/admin"
              element={
                <AuthProvider>
                  <Admin />
                </AuthProvider>
              }
            />

            <Route path="/not-found" element={<ErrorRoute />} />
            <Route path="/*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
