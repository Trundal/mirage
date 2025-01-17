import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export type MenuItem = {
  _type: string
  slug?: string
  title?: string
}

export type HeroItem = {
  image?: Image
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

export type ShowcaseProject = {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export type HomePagePayload = {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export type PortfolioPagePayload = {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
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
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export type SettingsPayload = {
  menuItems?: MenuItem[]
  footerItems?: MenuItem[]
}
