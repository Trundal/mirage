import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import BlogPage from '@/components/pages/blog/BlogPage'
import BlogPreview from '@/components/pages/blog/BlogPreview'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadBlogPageWithEntries } from '@/sanity/loader/loadQuery'

const ProjectPreview = dynamic(
  () => import('@/components/pages/blog/BlogPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: blog } = await loadBlogPageWithEntries()

  return {
    title: blog?.page.title,
    // description: blog?.page.overview,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function BlogPageRoute({ params }: Props) {
  const initial = await loadBlogPageWithEntries()

  if (draftMode().isEnabled) {
    return <BlogPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogPage data={initial.data} />
}
