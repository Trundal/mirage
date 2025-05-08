import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

// OBJECT TYPES

export type MenuItem = {
  _type: string
  slug?: string
  title?: string
}

export type HeroItem = {
  media?: any[]
  header?: string
  description?: string
}

export type SettingsPayload = {
  menuItems?: MenuItem[]
  footerItems?: MenuItem[]
  description?: PortableTextBlock[]
  email?: string
  phone?: string
  address?: PortableTextBlock[]
}

// ***** PAGES *****

// HOMEPAGE

export type HomePagePayload = {
  title?: string
  overview?: PortableTextBlock[]
  projectsTitle?: string
  projects_ref?: any[]
  vpHeader?: string
  vpMedia?: any
  vpText?: string
  vfxHeader?: string
  vfxMedia?: any
  vfxText?: string
  aboutUsHeader?: string
  aboutUsLayout?: any[]
}

// PROJECT % PORTFOLIO PAGES

export type PortfolioPagePayload = {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
}

export type ProjectPayload = {
  title?: string
  slug: string
  hero?: HeroItem
  name: string
  client: string
  coverImage: Image
  imageObject?: Image
  description?: string
  header1: string
  layoutBlocks_1?: any[]
  header2: string
  layoutBlocks_2?: any[]
}

// BLOG PAGE

export type BlogPagePayload = {
  layoutBlocks?: any[]
  title?: string
  header?: string
  overview?: PortableTextBlock[]
}

export type BlogEntryPayload = {
  _id: string
  _createdAt: string
  title?: string
  link?: any
  tags?: string[]
  layoutBlocks?: any[]
}

export type BlogPageWithEntriesPayload = {
  page: BlogPagePayload
  entries: BlogEntryPayload[]
}

// ABOUT PAGE

export type AboutPagePayload = {
  title: string
  overview?: PortableTextBlock[]
  banner?: any
  layout?: any[]
}

// GENERAL PAGES

export type PagePayload = {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  layoutBlocks?: any[]
}
