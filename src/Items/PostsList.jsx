import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/sv";

const PostsList = ({ post, setPosts, posts, setFilterd, setShow }) => {
  const [del, setDel] = useState(false);
  const remove = (id) => {
    try {
      console.log(id);
      axios.delete("http://localhost:3004/posts/" + id);
      const data = posts.filter((post) => post.id !== id);
      console.log(data);
      setPosts([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    let tag = [e.target.innerHTML];
    tag = tag.map((e) => e.toLowerCase());
    // console.log(tag);
    const sort = posts.filter((el) =>
      el.categories.some((cat) => tag.includes(cat.toLowerCase()))
    );
    setFilterd(sort);
    setShow(true);
  };

  return (
    <div
      onMouseOver={() => setDel(true)}
      onMouseLeave={() => setDel(false)}
      className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-10 relative"
    >
      <button
        className="absolute capitalize right-5 top-5 text-white"
        onClick={() => remove(post.id)}
      >
        {del && <i className="fa-solid fa-trash"></i>}
      </button>
      <img
        className="object-cover w-full h-64"
        src={post.imgURL}
        alt="Article"
      />

      <div className="p-6">
        <div>
          <div className="text-xs font-medium text-blue-600 uppercase flex justify-between">
            <span className="mx-1 text-gray-600 dark:text-gray-300 capitalize">
              {moment(post.timestamp).fromNow()}
            </span>
            <div>
              {post.categories?.map((cat, index) => (
                <span
                  className="mx-2 cursor-pointer"
                  key={index}
                  onClick={handleClick}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h2 className="block mt-2 text-2xl font-bold text-gray-800 uppercase ">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{post.body}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <Link
              to={`/blog/${post.id}`}
              className="mx-1 text-gray-600 dark:text-gray-300 capitalize"
            >
              read more
            </Link>
            <div className="flex items-center">
              <h3 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                Posted By: {post.author}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
