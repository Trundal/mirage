import { getComponent, getMedia } from '@/app/(portfolio)/functions'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  const { hero, layoutBlocks, dividerText, btsBlocks } = data ?? {}

  return (
    <div>
      {hero?.media?.map((media) => getMedia(media))}
      {layoutBlocks && (
        <div>{layoutBlocks.map((block) => getComponent(block))}</div>
      )}
      {dividerText && <div>{dividerText}</div>}
      {btsBlocks && <div>{btsBlocks.map((block) => getComponent(block))}</div>}
    </div>
  )
}

export default ProjectPage
