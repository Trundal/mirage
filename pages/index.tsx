import Head from 'next/head'
import ToPScene from '@/components/Scenes/ToP/ToP'

import styles from '@/styles/Home.module.css'
import { Suspense } from 'react'
import Logo from '../components/Logo/Logo'
import PageContainer from './layout/Container/Container'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirage.GMBH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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