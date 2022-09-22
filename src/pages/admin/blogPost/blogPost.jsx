import "./blogPost.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { setBlog } from "../../../firebase/firebaseApi";

function BlogPost() {
  const [heading, setHeading] = useState("");
  const [tagline, setTagline] = useState("");
  const [content, setContent] = useState("");

  const handlePrint = async () => {
    const blog = { heading, tagline, content, date: new Date() };
    try {
      await setBlog(blog);
      setHeading("")
      setTagline("")
      setContent("")
    } catch (error) {
      console.log(error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="blogPost">
      <h1>Blog Post</h1>
      <input
        type="text"
        className="blogPost__heading blogPost__input"
        placeholder="Heading..."
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <input
        type="text"
        className="blogPost__eyeCatch blogPost__input"
        placeholder="Add some eye catching line about your topic..."
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        className="blogPost__editor"
        modules={modules}
      />
      <input
        type="button"
        onClick={handlePrint}
        value="Post Me"
        className="blogPost__button btn"
      />
    </div>
  );
}

export default BlogPost;
