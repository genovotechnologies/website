"use client"

import Script from "next/script"

export function Analytics() {
  return (
    <>
      {/* Ahrefs Web Analytics - Privacy-friendly */}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="asrHwBiwtOQ8Q+sudjXgOA"
        strategy="afterInteractive"
      />

      {/* 
        You can add other analytics scripts here.
        For example, Google Analytics:
      */}
      {/* 
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      */}
    </>
  )
} 