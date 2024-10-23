import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  return (
    <nav className={`flex-col md:flex-row items-center flex ${props.justify}`}>
      <Link to="/blog" className="mx-4 font-bold hover-spec">
        BLOG
      </Link>
      <Link to="/recipe" className="mx-4 font-bold hover-spec">
        RECIPES
      </Link>
      <Link to="/about" className="mx-4 font-bold hover-spec">
        ABOUT
      </Link>
    </nav>
  );
};

export default Menu;
