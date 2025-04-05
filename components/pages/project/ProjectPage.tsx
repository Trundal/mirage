import { getComponent, getMedia } from '@/app/(portfolio)/functions'
import LogoHeader from '@/components/layout/LogoHeader/LogoHeader'
import Tower from '@/components/layout/Tower/Tower'
import Accordion from '@/components/library/Accordion/Accordion'
import H1 from '@/components/library/Text/H1'
import H2 from '@/components/library/Text/H2'
import type { ProjectPayload } from '@/types'

import styles from './ProjectPage.module.css'

export type ProjectPageProps = {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  const { hero, client, name, layoutBlocks_1, layoutBlocks_2 } = data ?? {}

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroContainer}>
        <div>
          <LogoHeader opacity={0.3} />
          <div className={styles.backgroundContainer}>
            {hero?.media?.map((media) => getMedia(media))}
          </div>
        </div>
      </div>
      <div className={styles.headerWrapper}>
        <H1 textAlign="center">{name || ''}</H1>
        <H2 textAlign="center">{client?.toUpperCase() || ''}</H2>
      </div>
      <Tower>
        <>
          {layoutBlocks_1 && layoutBlocks_1.map((block) => getComponent(block))}
        </>
      </Tower>
      <Accordion label={'Behind the scenes'}>
        <Tower>
          <>
            {layoutBlocks_2 &&
              layoutBlocks_2.map((block) => getComponent(block))}
          </>
        </Tower>
      </Accordion>
    </div>
  )
}

export default ProjectPage
