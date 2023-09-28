import Head from 'next/head'
import ToPScene from '@/components/Scenes/ToP/ToP'

import styles from '@/styles/Home.module.css'
import { Suspense } from 'react'
import PageContainer from '../components/layout/Container/Container'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirage.GMBH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <PageContainer>
        <Header />
        <div className={styles.canvasContainer}>
          <Suspense fallback={null}>
            <ToPScene />
          </Suspense>
        </div>
        <Footer />
      </PageContainer>
    </>
  )
}
