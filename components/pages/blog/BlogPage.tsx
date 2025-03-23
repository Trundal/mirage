import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { BlogPagePayload } from '@/types'

import styles from './BlogPage.module.css'

export type BlogPageProps = {
  data: BlogPagePayload | null
}

export default function BlogPage({ data }: BlogPageProps) {
  const { footer, body, overview, title } = data ?? {}

  return (
    <div className={styles.pageContainer}>
      <LogoHeader />
      <div className={styles.bodyWrapper}>
        <Header title={title} description={overview} />
        {body && <CustomPortableText value={body} />}
      </div>
    </div>
  )
}
