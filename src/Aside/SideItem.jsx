import React from "react";
import moment from "moment";
import "moment/locale/sv";
import { Link } from "react-router-dom";

const SideItem = ({ post }) => {
  return (
    <div>
      <Link to={`/blog/${post.id}`} className="flex group">
        <div className="flex-shrink-0">
          <img
            className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
            src={post.imgURL}
            alt={post.title}
          />
        </div>
        <div className="flex-grow pl-3">
          <h5 className="text-md leading-5 block font-roboto font-semibold transition group-hover:text-blue-500">
            {post.title}
          </h5>
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-1 text-xs">
              <i className="far fa-clock"></i>
            </span>
            {moment(post.timestamp).fromNow()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideItem;
