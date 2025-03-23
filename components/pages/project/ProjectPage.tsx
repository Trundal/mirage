import { getComponent, getMedia } from '@/app/(portfolio)/functions'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import H1 from '@/components/layout/Text/H1'
import H2 from '@/components/layout/Text/H2'
import type { ProjectPayload } from '@/types'

import styles from './ProjectPage.module.css'

export type ProjectPageProps = {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  const {
    hero,
    client,
    name,
    header1,
    layoutBlocks_1,
    header2,
    layoutBlocks_2,
  } = data ?? {}

  return (
    <div>
      <div className={styles.pageContainer}>
        <div className={styles.heroContainer}>
          <div>
            <LogoHeader />
            <div className={styles.backgroundContainer}>
              {hero?.media?.map((media) => getMedia(media))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerWrapper}>
        {header1 ? (
          <H1 textAlign="center">{header1}</H1>
        ) : (
          <>
            <H1 textAlign="center">{name || ''}</H1>
            <H2 textAlign="center">{client?.toUpperCase() || ''}</H2>
          </>
        )}
      </div>
      {layoutBlocks_1 && (
        <div>{layoutBlocks_1.map((block) => getComponent(block))}</div>
      )}
      <section className={styles.sectionContainer}>
        <div className={styles.subHeaderWrapper}>
          {header2 && <H2 textAlign="right">{header2}</H2>}
        </div>
        {layoutBlocks_2 && (
          <div>{layoutBlocks_2.map((block) => getComponent(block))}</div>
        )}
      </section>
    </div>
  )
}

export default ProjectPage
