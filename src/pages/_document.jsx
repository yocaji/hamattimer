import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="はまったいまーはプログラミング学習者のための問題解決サポートツールです。時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、効率的に問題解決に取り組むお手伝いをします。"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link
            href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&family=Source+Code+Pro&family=Zen+Maru+Gothic:wght@500;700&display=swap"
            rel="stylesheet"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="はまったいまー｜プログラミングでハマる前に"/>
          <meta property="og:url" content="https://hamattimer.app"/>
          <meta property="og:description" content="はまったいまーはプログラミング学習者のための問題解決サポートツールです。時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、効率的に問題解決に取り組むお手伝いをします。"/>
          <meta property="og:site_name" content="はまったいまー"/>
          <meta property="og:image" content="https://hamattimer.app/og-image.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@yocajii"/>
          <meta name="twitter:domain" content="hamattimer.app"/>
          <meta name="twitter:image" content="https://hamattimer.app/og-twitter.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
  )
  }
  }

  export default MyDocument
