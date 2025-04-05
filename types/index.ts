import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

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

export type BlogEntries = {
  _id?: string
  _type?: string
  title?: string
  name?: string
  client?: string
  coverImage: Image
  description: string
  tags: any
  header: string
  layoutBlocks: any[]
}

// Page payloads

export type HomePagePayload = {
  title?: string
  overview?: PortableTextBlock[]
  projectsTitle?: string
  projects_ref?: any[]
  vpHeader?: string
  vpMedia?: any
  vpText?: string
  fxHeader?: string
  fxMedia?: any
  fxText?: string
  aboutUsHeader?: string
  aboutUsLayout?: any[]
}

export type BlogPagePayload = {
  title?: string
  description?: PortableTextBlock[]
  blogEntries?: BlogEntries[]
}

export type BlogEntryPayload = {
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

export type PortfolioPagePayload = {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
}

export type PagePayload = {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  layoutBlocks?: any[]
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

export type SettingsPayload = {
  menuItems?: MenuItem[]
  footerItems?: MenuItem[]
  description?: PortableTextBlock[]
  email?: string
  phone?: string
  address?: PortableTextBlock[]
}
