import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/sv";

const PostDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get(" http://localhost:3004/posts/" + id);
    setItem(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // const containerStyle = {
  //   backgroundImage: `url(${post.imgURL})`,
  // };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {item && (
        <section className="bg-gray-100 text-gray-800 rounded-lg max-w-screen-lg py-8 mx-auto mt-8">
          <div
            className="items-center w-11/12 h-96 mx-auto rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${item.imgURL})`,
            }}
          ></div>
          <div className="bg-white -mt-24 mx-auto items-center w-5/6 rounded-lg p-4 shadow-lg">
            <div className=" my-4 md:flex items-center justify-between p-2">
              <h1
                className="text-center font-semibold text-3xl sm:text-4xl md:tracking-wide 
        break-words sm:text-left"
              >
                {item.title}
              </h1>
              <div className="text-xs font-medium text-blue-600 uppercase text-center mt-5 md:mt-0">
                {item.categories?.map((cat, index) => (
                  <span className="mx-2" key={index}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="select-none flex items-center p-2 ">
              <div className="flex-1 pl-1 mr-4 sm:mr-16">
                <div className="font-medium">Posted By: {item.author}</div>
                <div className="text-gray-600 text-sm">
                  {moment(item.timestamp).fromNow()}
                </div>
              </div>
              <div className="text-gray-600 hover:text-gray-700">
                <i className="fa-solid fa-share-nodes text-2xl mr-5"></i>
              </div>
            </div>
            <div className="bg-gray-200 text-base p-6 mt-4 rounded-xl indent-6 text-justify sm:text-lg">
              {item.body}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PostDetails;
