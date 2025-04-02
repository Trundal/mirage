import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { BlogPagePayload } from '@/types'

import styles from './BlogPage.module.css'
import BlogEntry from './Entry/Entry'

export type BlogPageProps = {
  data: BlogPagePayload | null
}

export default function BlogPage({ data }: BlogPageProps) {
  const { title, description, blogEntries } = data ?? {}

  return (
    <div className={styles.pageContainer}>
      <LogoHeader />
      <div className={styles.bodyWrapper}>
        <Header title={title} description={description} />
        {description && <CustomPortableText value={description} />}
        {blogEntries && <BlogEntry blogEntries={blogEntries} />}
      </div>
    </div>
  )
}
