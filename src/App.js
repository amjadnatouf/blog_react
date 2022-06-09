import React from "react";
import Header from "./navigation/Header.jsx";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import NewPost from "./views/NewPost.jsx";
import Blog from "./views/Blog.jsx";
import PostDetails from "./Items/PostDetails.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div className="w-4/5 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetails />} />

          {
            <Route
              path="*"
              element={
                <div>
                  <h2>404 den här sidan finns inte</h2>
                </div>
              }
            />
          }
        </Routes>
      </div>
    </div>
  );
};

export default App;
