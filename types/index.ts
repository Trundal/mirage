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

export type MilestoneItem = {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

// Page payloads

export type HomePagePayload = {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  header1: string
  layoutBlocks_ref_1?: any[]
  header2: string
  layoutBlocks_ref_2?: any[]
}

export type BlogPagePayload = {
  body?: PortableTextBlock[]
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
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
