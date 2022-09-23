import "./blog.scss";
import { useEffect, useState } from "react";
import { getBlog } from "../../firebase/firebaseApi";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
function Blog() {
  const { blogId } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    try {
      const fetchBlog = async () => {
        const blog = await getBlog(blogId);
        setBlog(blog);
        setLoading(false);
      };
      fetchBlog();
    } catch (error) {
      console.log(error);
    }
  }, [blogId]);

  document.querySelector("title").innerText = "Blog - Rohit-Gupta";
  return (
    <div className="blog">
      {!loading ? (
        <div className="blog__content">
          <h1>{blog.heading}</h1>
          <h4>{blog.tagline}</h4>
          <div
            className="blog__content__main"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Blog;
