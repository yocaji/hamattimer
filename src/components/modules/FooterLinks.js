import SignOutLink from '../elements/SignOutLink'
import Link from 'next/link'

export default function FooterLinks() {

    return (
      <p className={'is-size-6-half has-text-weight-bold'}>
        <Link href={'/'} className={'mx-3'}>トップページ</Link>
        <SignOutLink/>
      </p>
    )
}
