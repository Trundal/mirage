import { Suspense } from 'react'

import PageContainer from '@/components/layout/Container/Container'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import ToPScene from '@/components/Scenes/ToP/ToP'

import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <PageContainer>
      <Header />
      <div className={styles.canvasContainer}>
        <Suspense fallback={null}>
          <ToPScene />
        </Suspense>
      </div>
      <Footer />
    </PageContainer>
  )
}

export default HomePage
