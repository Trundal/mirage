import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    divider,
    layoutBlocks
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    description,
    "slug": slug.current,
    title,
    name,
    client,
    imageObject,
    hero,
    layoutBlocks,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const portfolioPageQuery = groq`
  *[_type == "portfolio"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    footerItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    email,
    phone,
    address,
    description
  }
`
