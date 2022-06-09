import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center mt-28">
      <section className="bg-white dark:bg-gray-800 rounded-md">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mt-5">
                Who I am
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Hi I am amjad , software engineer{" "}
                <a
                  className="font-bold text-blue-600 dark:text-blue-400"
                  href="!#"
                >
                  @Lexicon Team
                </a>
                , Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti
                dolorem sequi ex veniam consequuntur id, maiores beatae ipsa
                omnis aliquam?
              </p>

              <button className="mt-10 capitalize border-2 rounded-md py-2 px-4 logo nav-links text-xl">
                <Link to="/blog">get started</Link>
              </button>

              <ul className="flex items-center mt-6 -mx-2">
                <li className="mx-2">
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-twitter"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-pinterest-p"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-instagram"></i>
                </li>
                <li className="mx-2">
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
