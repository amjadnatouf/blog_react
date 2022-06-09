import React from "react";
import SideItem from "./SideItem";

const Aside = ({ items, posts, show, setShow, setFilterd }) => {
  let tags = [
    "Beauti",
    "Sports",
    "Business",
    "Politics",
    "Computer",
    "Coding",
    "Web Design",
    "Web App",
    "Food",
    "Travel",
    "FrontEnd",
    "Computers",
    "Test",
  ];

  const handleClick = (e) => {
    let tag = [e.target.innerHTML];
    tag = tag.map((e) => e.toLowerCase());
    // console.log(items);
    const sort = items.filter((el) =>
      el.categories.some((cat) => tag.includes(cat.toLowerCase()))
    );
    // console.log(sort);
    setFilterd(sort);
    setShow(true);
  };

  return (
    <div>
      <div className="">
        <div className="w-full bg-white shadow-sm rounded-sm p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
            Social Plugin
          </h3>
          <ul className="flex gap-2">
            <li className="icon">
              <i className="fab fa-facebook-f"></i>
            </li>
            <li className="icon">
              <i className="fab fa-twitter"></i>
            </li>
            <li className="icon">
              <i className="fab fa-instagram"></i>
            </li>
            <li className="icon">
              <i className="fab fa-pinterest-p"></i>
            </li>
            <li className="icon">
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>

        <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
            Popular Posts
          </h3>
          <div className="space-y-4">
            {posts.map((post) => (
              <SideItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="w-full bg-white shadow-sm rounded-sm p-4 mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
            Tags
          </h3>
          <ul className="flex items-center flex-wrap gap-2">
            <li
              className={show ? "super" : "tag"}
              onClick={() => setShow(false)}
            >
              All
            </li>

            {tags.map((tag, index) => (
              <li key={index} className="tag" onClick={handleClick}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
