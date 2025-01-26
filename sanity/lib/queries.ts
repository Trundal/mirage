import { groq } from 'next-sanity'

const projectSummaryFields = `{
  "slug": slug.current,
  client,
  coverImage,
  name
}`

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    divider,
    layoutBlocks,
    layoutBlocks_ref[]{
      ...,
      left33_ref->${projectSummaryFields},
      center33_ref->${projectSummaryFields},
      right33_ref->${projectSummaryFields},
      left50_ref->${projectSummaryFields},
      right50_ref->${projectSummaryFields},
      left66_ref->${projectSummaryFields},
      right66_ref->${projectSummaryFields},
      singleColumn_ref->${projectSummaryFields},
    }
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
    project,
    coverImage,
    imageObject,
    hero,
    layoutBlocks,
    dividerText,
    btsBlocks
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
