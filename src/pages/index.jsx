import Head from 'next/head'
import WelcomePage from '../components/templates/WelcomePage'

export default function Index() {
  return (
    <>
      <Head>
        <title>はまったいまー</title>
      </Head>
      <WelcomePage/>
    </>
  )
}
