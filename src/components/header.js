import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
    <div>
      <StaticImage
        src="../../static/assets/images/RedBrickLogo.png"
        layout="fixed"
        width={150}
      />
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
        <Link to="/" className="hover:underline">
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <p>Farmhouse-Style Originals</p>
    </div>
  );
}
