import type { PortableTextBlock } from 'next-sanity'

import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footerItems
  console.log(footer)
  return (
    <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
      {/* {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )} */}
    </footer>
  )
}
