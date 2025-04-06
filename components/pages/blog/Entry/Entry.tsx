import { getComponent } from '@/app/(portfolio)/functions'
import H2 from '@/components/library/Text/H2'
import P from '@/components/library/Text/Paragraph'
import type { BlogEntryPayload } from '@/types'

import styles from './BlogPage.module.css'

export type BlogEntryProps = {
  blogEntries: BlogEntryPayload[]
  selection?: string
}

const formatDate = (date: string) => {
  const newDate = new Date(date)

  const formattedDate = newDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formattedDate
}

export default function BlogEntry({ blogEntries, selection }: BlogEntryProps) {
  return (
    <>
      {blogEntries.map((entry) => {
        console.log('BlogEntry: ', entry)
        return (
          <div key={entry._id}>
            <H2 textAlign="center">{entry.title}</H2>
            <P textAlign="center">{formatDate(entry._createdAt)}</P>
            {entry.layoutBlocks &&
              entry.layoutBlocks.map((block) => getComponent(block))}
          </div>
        )
      })}
    </>
  )
}
