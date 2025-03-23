import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import BlogPage from '@/components/pages/blog/BlogPage'
import BlogPreview from '@/components/pages/blog/BlogPreview'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadBlogPage } from '@/sanity/loader/loadQuery'

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
  const { data: blog } = await loadBlogPage()

  return {
    title: blog?.title,
    // description: blog?.overview,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadBlogPage()

  if (draftMode().isEnabled) {
    return <BlogPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogPage data={initial.data} />
}
