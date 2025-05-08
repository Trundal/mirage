'use client'

import { getComponent } from '@/app/(portfolio)/functions'
import Section from '@/components/layout/Tower/Blocks/Section/Section'
import Tower from '@/components/layout/Tower/Tower'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPagePayload } from '@/types'

import styles from './AboutPage.module.css'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import H3 from '@/components/library/Text/H3'

export type AboutPageProps = {
  data: AboutPagePayload
}

export default function AboutPage({ data }: AboutPageProps) {
  const { overview, banner, layout } = data ?? {}

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.logoOverlay}>
          <LogoHeader />
        </div>
        {overview && (
          <div className={styles.centeredContent}>
            <H3>
              <CustomPortableText value={overview} />
            </H3>
          </div>
        )}
      </div>
      <Section>
        <Tower>
          {banner && getComponent(banner)}
          {layout?.map((block) => getComponent(block))}
        </Tower>
      </Section>
    </div>
  )
}
