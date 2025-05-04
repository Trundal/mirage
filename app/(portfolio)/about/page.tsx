import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import AboutPage from '@/components/pages/about/AboutPage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadAboutPage } from '@/sanity/loader/loadQuery'

const AboutPreview = dynamic(
  () => import('@/components/pages/about/AboutPreview'),
)

export async function generateMetadata(): Promise<Metadata> {
  const { data: about } = await loadAboutPage()

  return {
    title: about?.title,
    // description: blog?.page.overview,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function AboutPageRoute() {
  const initial = await loadAboutPage()

  if (draftMode().isEnabled) {
    return <AboutPreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <AboutPage data={initial.data} />
}
