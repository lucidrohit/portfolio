import Hr from "../../components/common/hr/hr";
import "./blogs.scss";
import { useEffect, useState } from "react";
import { getBlogs } from "../../firebase/firebaseApi";
import Loader from "../../components/loader/loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/errorFallback/errorFallback";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getTenBlogs = async () => {
        const tenBlogs = await getBlogs();
        setBlogs(tenBlogs);
        setLoading(false);
      };
      getTenBlogs();
    } catch (error) {
      console.log(error);
    }
  }, []);

  document.querySelector("title").innerText = "Blogs - Rohit-Gupta";

  return (
    <div className="blogs">
      <h1 style={{ marginBottom: "20px" }}>Blogs</h1>
      <p style={{ marginBottom: "0px" }}>
        Hey there, Here are my new blogs about Html, Css and Js technologies.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda
        cum veniam alias eius odit praesentium corrupti vitae facere dolorem
        ullam est, nostrum similique rerum!
      </p>
      <Hr style={{ marginTop: "70px", marginBottom: "100px" }} />
      {!loading ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="blogs__blog">
            {blogs.map((blog) => (
              <div className="blogs__blog" key={blog.id}>
                <h6>{blog.date}</h6>
                <a className="blog__heading" href={`/blogs/${blog.id}`}>
                  {blog.heading}
                </a>
                <p className="blog__content">{blog.tagline}</p>
              </div>
            ))}
          </div>
        </ErrorBoundary>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Blogs;
