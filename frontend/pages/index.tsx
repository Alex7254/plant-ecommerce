import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import NavigationLinks from '../components/navigation/NavigationLinks';


const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
}

a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`

export default function Home() {
  return (
    <div>
      <GlobalStyle whiteColor/>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* <Nav></Nav> */}
      <NavigationLinks />
    </div>
  )
}
