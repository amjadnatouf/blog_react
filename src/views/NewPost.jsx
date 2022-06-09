import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const imageRef = useRef(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: title,
      author: author || "user",
      imgURL: fileDataURL,
      body: content,
    };

    console.log(post);

    try {
      await axios.post("http://localhost:3004/posts", post);
      setSuccess("Add story successfully ");

      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 7000);
      setError(error.response.data.error);
    }
  };

  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 mx-auto my-10 shadwo-gray shadow-lg p-10 bg-white rounded-md"
    >
      {error && <div className="error_msg">{error}</div>}
      {success && (
        <div className="success_msg">
          <span>{success}</span>
          <Link to="/">Go home</Link>
        </div>
      )}

      <h2 className="text-center text-5xl font-extrabold my-10">
        Create a new Post
      </h2>

      <div className="flex justify-between gap-5">
        <input
          type="text"
          required
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="rounded border-2 py-1 px-2 outline-none w-1/2"
        />

        <input
          type="text"
          id="author"
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="rounded border-2 py-1 px-2 outline-none w-1/2"
        />
      </div>

      <div className="post-img-input mt-6">
        <div className="">Include a high-quality image in your post."</div>
        <input
          required
          className="block w-full text-md border border-gray-300 rounded cursor-pointer mt-2"
          type="file"
          ref={imageRef}
          onChange={changeHandler}
        />
      </div>
      <textarea
        required
        className="w-full px-3 py-1.5 border border-solid border-gray-300 rounded mt-8 outline-none"
        id="post-body"
        rows="5"
        placeholder="Your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="mt-6 btn">
        Publish
      </button>
    </form>
  );
};

export default About;
