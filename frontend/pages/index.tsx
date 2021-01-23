import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import React from 'react';

import NavigationItems from '../components/navigation/navigationItems/NavigationItems';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* <Nav></Nav> */}
      <NavigationItems />
    </div>
  )
}
