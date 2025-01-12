import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

import styles from './Page.module.css'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}
  return (
    <div className={styles.pageContainer}>
      <LogoHeader />
      <div>
        <Header title={title} description={overview} />
        {body && <CustomPortableText value={body} />}
      </div>
    </div>
  )
}

export default Page
