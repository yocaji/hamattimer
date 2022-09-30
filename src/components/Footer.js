import SignOutLink from './elements/SignOutLink'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className={'footer is-light'}>
      <div className={'content has-text-centered'}>
        <div className={'columns is-size-6-half has-text-weight-bold'}>
          <div className={'column'}>
            <Link href={'/'}>トップページ</Link>
          </div>
          <div className={'column'}>
            <SignOutLink/>
          </div>
        </div>
      </div>
    </footer>
  )
}
