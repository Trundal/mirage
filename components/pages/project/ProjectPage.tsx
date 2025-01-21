import { getComponent, getMedia } from '@/app/(portfolio)/functions'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  const { hero, layoutBlocks } = data ?? {}

  return (
    <div>
      {hero?.media?.map((media) => getMedia(media))}
      {layoutBlocks?.map((block) => getComponent(block))}
    </div>
  )
}

export default ProjectPage
