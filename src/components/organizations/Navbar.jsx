import Image from 'next/image'

export default function Navbar(props) {

  return (
    <>
      <nav className={'navbar is-fixed-top py-3 has-border-sand-bottom has-background-paper'}>
        <div className={'navbar-brand'}>
          <span  className={'mx-2'}>
          <Image src={'/logomark.png'} width={56} height={60} layout={'fixed'} quality={100} alt={'ロゴマーク'}/>
          </span>
          <Image src={'/logotype.png'} width={199} height={52} layout={'fixed'} alt={'はまったいまー'}/>
        </div>
        {props.children}
      </nav>
      <div className={'block pt-6 mt-4'}></div>
    </>
  )
}
