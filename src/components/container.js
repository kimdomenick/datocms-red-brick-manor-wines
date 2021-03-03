import React from "react"
import { Link } from "gatsby"
import {
  navContainer,
  navLinks,
  navLinkItem,
  navLinkText
} from './container.module.css'
import Header from "./header"

export default function Container({ children, pageTitle }) {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <title>{pageTitle}</title>
      <h1>{pageTitle}</h1>
      <div className={navContainer}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/recipe" className={navLinkText}>
                Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {children}
    </div>
  ) 
}
