import { getComponent } from '@/app/(portfolio)/functions'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { description, title, layoutBlocks } = data ?? {}

  return <div>{layoutBlocks?.map((block) => getComponent(block))}</div>
}

export default ProjectPage
