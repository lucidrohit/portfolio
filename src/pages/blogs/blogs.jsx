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
      <p >
        Hey there, Welcome to the blog section of my portfolio! As a self-taught
        programmer with experience in Python, C & CPP, and various web
        technologies. I'm excited to share my knowledge and insights with you.
      </p>

      <p>
        In this section, you'll find a collection of blogs that cover topics
        related to these technologies, including tutorials, tips, and best
        practices.
      </p>
      <p style={{ marginBottom: "0px",}}>
        My goal is to provide valuable content that can help you improve your
        skills and stay up-to-date with the latest trends in the tech industry.
        So, whether you're a beginner or an experienced programmer, I invite you
        to join me on this journey of continuous learning and growth.
      </p>

      <Hr style={{ marginBottom: "100px" }} />
      {!loading ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="blogs__blog">
            {blogs.map((blog) => (
              <div className="blogs__blog" key={blog.id} data-aos="fade-right">
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
