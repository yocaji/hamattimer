import Image from 'next/image'

export default function Navbar(props) {

  return (
    <>
      <nav className={'navbar is-fixed-top py-1 is-primary has-background-navbar'}>
        <div className={'navbar-brand mt-1'}>
          <span className={'mx-2'}>
            <Image src={'/logomark-nega.png'} width={60} height={60} layout={'fixed'} quality={100} alt={'ロゴマーク'}/>
          </span>
          <Image src={'/logotype-nega.png'} width={150} height={60} layout={'fixed'} alt={'はまったいまー'}/>
        </div>
        {props.children}
      </nav>
      <div className={'block pt-6 mt-5'}></div>
    </>
  )
}
