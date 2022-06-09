import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import PostsList from "../Items/PostsList";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterd, setFilterd] = useState([]);
  const [show, setShow] = useState(false);
  const [side, setSide] = useState([]);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:3004/posts");
    setPosts(res.data);
    // console.log(posts);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filter = posts.filter((el) => el.timestamp >= [2022, 1, 1]);
    // console.log(filter);
    setSide(filter);
  }, [posts]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!show ? (
        posts && (
          <div className="grid grid-cols-3 gap-1">
            <div className="box col-start-1 col-span-2">
              {posts.map((post) => (
                <PostsList
                  key={post.id}
                  post={post}
                  setPosts={setPosts}
                  posts={posts}
                  setShow={setShow}
                  setFilterd={setFilterd}
                />
              ))}
            </div>
            <div className="box col-start-3 col-span-3 my-10">
              <Aside
                items={posts} //this is all posts that will filtre by Aside tags
                posts={side} //this is posts that filterd to show in popular posts in Aside
                show={show}
                setShow={setShow}
                setFilterd={setFilterd}
              />
            </div>
          </div>
        )
      ) : (
        <div className="grid grid-cols-3 gap-1">
          <div className="box col-start-1 col-span-2">
            {filterd.map((post) => (
              <PostsList
                key={post.id}
                post={post}
                setPosts={setPosts}
                posts={posts}
                setShow={setShow}
                setFilterd={setFilterd}
              />
            ))}
          </div>
          <div className="box col-start-3 col-span-3 my-10">
            <Aside
              items={posts} //this is all posts that will filtre by Aside tags
              posts={side} //this is posts that filterd to show in popular posts in Aside
              show={show}
              setShow={setShow}
              filterd={filterd}
              setFilterd={setFilterd}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
