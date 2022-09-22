import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Head>
        <title>はまったいまー</title>
      </Head>
      <div className={'hero is-large has-text-centered'}>
        <div className={'hero-body'}>
          <Link href={'timer'}>
            <button className={'button'}>
              使ってみる
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
