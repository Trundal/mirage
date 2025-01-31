import { Suspense } from 'react'

import { getRefLayout } from '@/app/(portfolio)/functions'
import Footer from '@/components/layout/Footer/Footer'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import ToPScene from '@/components/Scenes/ToP/ToP'
import { HomePagePayload } from '@/types'

import styles from './HomePage.module.css'
import H1 from '@/components/layout/Text/H1'

export interface HomePageProps {
  data: HomePagePayload | null
}

export default function HomePage({ data }: HomePageProps) {
  const { header1, layoutBlocks_ref_1, header2, layoutBlocks_ref_2 } =
    data ?? {}

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroContainer}>
        <div>
          <LogoHeader />
          <div className={styles.canvasContainer}>
            <Suspense fallback={null}>
              <ToPScene />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
      {header1 && <H1 textAlign="center">{header1}</H1>}
      {layoutBlocks_ref_1?.map((block) => getRefLayout(block))}
      {header2 && <H1 textAlign="center">{header2}</H1>}
      {layoutBlocks_ref_2?.map((block) => getRefLayout(block))}
    </div>
  )
}
