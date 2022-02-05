import Head from "next/head";
import { createGlobalStyle } from "styled-components";

import SectionWrapper from "../hoc/layout/SectionWrapper";
import NavigationLinks from "../components/navigation/NavigationLinks";
import HeroSection from "../components/homepage/HeroSection";
import SectionTitle from "../components/common/SectionTitle";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-green: #333300;
    --light-green: #666633;
    --beige: #fefae0;
  }
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

  button {
    border: none;
    font-family: "Poppins";
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Cat Farm Succulents</title>
      </Head>

      <NavigationLinks />
      <HeroSection />
      <SectionWrapper>
        <SectionTitle>Featured Plants</SectionTitle>
      </SectionWrapper>
    </div>
  );
}
