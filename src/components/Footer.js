import SignOutLink from './elements/SignOutLink'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className={'footer is-light has-text-centered has-border-subtle-top'}>
      <div className={'is-size-6-half'}>
        <Link href={'/'}>トップページ</Link>
        <SignOutLink/>
      </div>
    </footer>
  )
}
