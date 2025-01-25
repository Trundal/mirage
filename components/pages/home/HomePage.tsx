import { Suspense } from 'react'

import { getComponent } from '@/app/(portfolio)/functions'
import Footer from '@/components/layout/Footer/Footer'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import ToPScene from '@/components/Scenes/ToP/ToP'
import { HomePagePayload } from '@/types'

import styles from './HomePage.module.css'
import H3 from '@/components/layout/Text/H3'

export interface HomePageProps {
  data: HomePagePayload | null
}

export default function HomePage({ data }: HomePageProps) {
  const { layoutBlocks, divider } = data ?? {}

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
      {divider && <H3>{divider}</H3>}
      {layoutBlocks?.map((block) => getComponent(block))}
    </div>
  )
}
