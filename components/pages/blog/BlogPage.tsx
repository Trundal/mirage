'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { getComponent } from '@/app/(portfolio)/functions'
import Badge from '@/components/library/Badge/Badge'
import H1 from '@/components/library/Text/H1'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { BlogEntryPayload, BlogPagePayload } from '@/types'

import styles from './BlogPage.module.css'
import BlogEntry from './Entry/Entry'

export type BlogPageProps = {
  data: {
    page: BlogPagePayload | null
    entries: BlogEntryPayload[]
  }
  selection?: string
}

const filterItems = ['all', 'vp', 'vfx']

export default function BlogPage({ data }: BlogPageProps) {
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState(searchParams.get('filter') || 'all')
  const { header, overview, layoutBlocks } = data.page ?? {}

  const updateURL = (newFilter: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newFilter) {
      params.set('filter', newFilter)
    } else {
      params.delete('filter')
    }

    const query = params.toString()
    window.history.replaceState(null, '', `/blog${query ? `?${query}` : ''}`)
  }

  const handleChangeFilter = (newFilter: string) => {
    setFilter(newFilter)
    updateURL(newFilter)
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
          {filterItems.map((item) => {
            return (
              <Badge
                key={item}
                text={item}
                handleClick={handleChangeFilter}
                selected={item === filter}
              />
            )
          })}
        </div>
        <div className={styles.headLogo}>
          <Image
            src={'/mirage_xxs.gif'}
            alt="spinning head logo"
            width={150}
            height={115}
          />
        </div>
        <div className={styles.entries}>
          {data.entries && (
            <BlogEntry blogEntries={data.entries} selection={filter} />
          )}
        </div>
      </div>
    </div>
  )
}
