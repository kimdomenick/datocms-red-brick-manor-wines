import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link to="/" className="hover:underline">
        {data.site.siteMetadata.title}
      </Link>
      .
    </h2>
  )
}
