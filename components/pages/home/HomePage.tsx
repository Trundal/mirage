import { Suspense } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import ToPScene from '@/components/Scenes/ToP/ToP'

import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <LogoHeader />
      <div className={styles.canvasContainer}>
        <Suspense fallback={null}>
          <ToPScene />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
