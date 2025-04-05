import { getComponent } from '@/app/(portfolio)/functions'
import H2 from '@/components/library/Text/H2'
import H3 from '@/components/library/Text/H3'
import P from '@/components/library/Text/Paragraph'
import type { BlogEntries } from '@/types'

import styles from './BlogPage.module.css'

export type BlogEntryProps = {
  blogEntries: BlogEntries[]
}

export default function BlogEntry({ blogEntries }: BlogEntryProps) {
  return (
    <>
      {blogEntries.map((entry) => {
        return (
          <div key={entry._id}>
            <H2 textAlign="center">{entry.title}</H2>
            <H3 textAlign="center">{entry.name}</H3>
            <H3 textAlign="center">{entry.client}</H3>
            <P>{entry.description}</P>
            {entry.layoutBlocks &&
              entry.layoutBlocks.map((block) => getComponent(block))}
          </div>
        )
      })}
    </>
  )
}
