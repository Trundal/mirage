'use client'

import { useState } from 'react'

import { getComponent } from '@/app/(portfolio)/functions'
import Badge from '@/components/library/Badge/Badge'
import H1 from '@/components/library/Text/H1'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { BlogEntryPayload, BlogPagePayload } from '@/types'

import styles from './BlogPage.module.css'
import BlogEntry from './Entry/Entry'

export type BlogPageProps = {
  page: BlogPagePayload | null
  entries: BlogEntryPayload[]
  selection: string
}

const filterItems = ['all', 'vp', 'vfx']

export default function BlogPage({
  page,
  entries,
  selection = 'all',
}: BlogPageProps) {
  const [filter, setFilter] = useState(selection)
  const { header, overview, layoutBlocks } = page ?? {}

  const handleClick = (text: string) => {
    setFilter(text)
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bodyWrapper}>
        {layoutBlocks?.map((block) => getComponent(block))}
        <div className={styles.headerWrapper}>
          {header && <H1 textAlign={'center'}>{header}</H1>}
          {overview && (
            <div className={styles.centeredContent}>
              <CustomPortableText value={overview} />
            </div>
          )}
        </div>
        <div className={styles.filters}>
          {filterItems.map((item) => (
            <Badge
              text={item}
              handleClick={handleClick}
              isSelected={item === filter}
            />
          ))}
        </div>
        <div className={styles.entries}>
          {entries && <BlogEntry blogEntries={entries} selection={filter} />}
        </div>
      </div>
    </div>
  )
}
