import Link from 'next/link'

import HomePage from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import HomePagePreview from '@/components/pages/home/HomePagePreview'
import { draftMode } from 'next/headers'

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (!initial.data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/structure/home`} className="underline">
          create one now
        </Link>
      </div>
    )
  }

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  return <HomePage data={initial.data} />
}
