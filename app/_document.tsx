import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Ahrefs Web Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="asrHwBiwtOQ8Q+sudjXgOA"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 