import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/menu";

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex-col md:flex-row flex items-top md:justify-between mb-16 md:mb-12">
      <div>
        <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
          <Link to="/" className="hover:underline">
            <StaticImage
              src="../../static/assets/images/RedBrickLogo.png"
              layout="fixed"
              width={150}
            />
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <p>Farmhouse-Style Originals</p>
      </div>
      <Menu />
    </div>
  );
}
