import { groq } from 'next-sanity'

const projectSummaryFields = `{
  "slug": slug.current,
  client,
  coverImage,
  name
}`

const referenceBlocks = `
  left33_ref->${projectSummaryFields},
  center33_ref->${projectSummaryFields},
  right33_ref->${projectSummaryFields},
  left50_ref->${projectSummaryFields},
  right50_ref->${projectSummaryFields},
  left66_ref->${projectSummaryFields},
  right66_ref->${projectSummaryFields},
  singleColumn_ref->${projectSummaryFields},
`

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    title,
    projectsTitle,
    projects_ref[]{
      ...,
      ${referenceBlocks}
    },
    vpHeader,
    vpMedia,
    vpText,
    fxHeader,
    fxMedia,
    fxText,
    aboutUsHeader,
    aboutUsLayout,
  }
`

export const blogEntryQuery = groq`
  *[_type == "entry"][0] {
    _id,
    title,
    name,
    client,
    coverImage,
    description,
    header,
    layoutBlocks,
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
    header1,
    layoutBlocks_1,
    header2,
    layoutBlocks_2,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
    layoutBlocks,
}
`

export const blogPageQuery = groq`
  *[_type == "blog"][0]{
    _id,
    title,
    description,
    blogEntries[]->{
      _type,
      title,
      name,
      client,
      coverImage,
      description,
      tags,
      header,
      layoutBlocks
    },
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
