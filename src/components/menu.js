import React from "react";
import { Link } from "gatsby";

const Menu = (props) => {
  return (
    <>
      <nav
        className={`flex-col md:flex-row items-center flex ${props.justify} menu-desktop`}
      >
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
      <div className="menu-mobile">
        <details>
          <summary role="button">
            <div>
              <span style={{ top: "10%" }}></span>
              <span style={{ top: "50%" }}></span>
              <span style={{ top: "90%" }}></span>
            </div>
            <div>MENU</div>
          </summary>
          <nav
            className={`flex-col md:flex-row items-center flex ${props.justify} bg-accent-1 border-t border-accent-2`}
          >
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
        </details>
      </div>
    </>
  );
};

export default Menu;
