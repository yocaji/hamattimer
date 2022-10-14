import '../styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import GoogleTagManager from '../components/atoms/GoogleTagManager'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
