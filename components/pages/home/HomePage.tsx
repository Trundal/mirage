import { Suspense } from 'react'

import { getComponent, getRefLayout } from '@/app/(portfolio)/functions'
import Footer from '@/components/layout/Footer/Footer'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import H1 from '@/components/layout/Text/H1'
import P from '@/components/layout/Text/Paragraph'
import ToPScene from '@/components/Scenes/ToP/ToP'
import { HomePagePayload } from '@/types'

import styles from './HomePage.module.css'

export interface HomePageProps {
  data: HomePagePayload | null
}

export default function HomePage({ data }: HomePageProps) {
  const {
    projectsTitle,
    projects_ref,
    vpHeader,
    vpMedia,
    vpText,
    fxHeader,
    fxMedia,
    fxText,
    aboutUsHeader,
    aboutUsLayout,
  } = data ?? {}

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
      {projectsTitle && <H1 textAlign="center">{projectsTitle}</H1>}
      {projects_ref?.map((block) => getRefLayout(block))}
      {vpHeader && <H1 textAlign="center">{vpHeader}</H1>}
      {vpMedia && getComponent(vpMedia)}
      {vpText && <P>{vpHeader}</P>}
      {fxHeader && <H1 textAlign="center">{fxHeader}</H1>}
      {fxMedia && getComponent(fxMedia)}
      {fxText && <P>{fxText}</P>}
      {aboutUsHeader && <H1 textAlign="center">{aboutUsHeader}</H1>}
      {aboutUsLayout?.map((block) => getComponent(block))}
    </div>
  )
}
