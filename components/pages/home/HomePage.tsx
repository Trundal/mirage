import Link from 'next/link'
import { Suspense } from 'react'

import { getComponent, getRefLayout } from '@/app/(portfolio)/functions'
import Footer from '@/components/layout/Footer/Footer'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import Section from '@/components/layout/Tower/Blocks/Section/Section'
import Tower from '@/components/layout/Tower/Tower'
import H1 from '@/components/library/Text/H1'
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
    vfxHeader,
    vfxMedia,
    vfxText,
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
      <Section>
        <Tower>
          <>
            {projectsTitle && <H1 textAlign="center">{projectsTitle}</H1>}
            {projects_ref?.map((block) => getRefLayout(block))}
          </>
        </Tower>
      </Section>
      <Section>
        <Tower>
          <>
            <Link
              href={{
                pathname: '/blog',
                query: { filter: 'vp' },
              }}
            >
              {vpHeader && <H1 textAlign="center">{vpHeader}</H1>}
            </Link>
            {vpMedia && getComponent(vpMedia)}
            {vpText && getComponent(vpText)}
          </>
        </Tower>
      </Section>
      <Section>
        <Tower>
          <>
            <Link
              href={{
                pathname: '/blog',
                query: { filter: 'vfx' },
              }}
            >
              {vfxHeader && <H1 textAlign="center">{vfxHeader}</H1>}
            </Link>

            {vfxMedia && getComponent(vfxMedia)}
            {vfxText && getComponent(vfxText)}
          </>
        </Tower>
      </Section>
      <Section>
        <Tower>
          <>
            {aboutUsHeader && <H1 textAlign="center">{aboutUsHeader}</H1>}
            {aboutUsLayout?.map((block) => getComponent(block))}
          </>
        </Tower>
      </Section>
    </div>
  )
}
