import ImpressumPage from '@/components/views/Impressum/Impressum'
import Head from 'next/head'

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Mirage.GMBH - Impressum</title>
        <meta
          name="description"
          content="MIRAGE VIRTUAL ART DEPARTMENT GMBH - IMPRESSUM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImpressumPage />
    </>
  )
}
