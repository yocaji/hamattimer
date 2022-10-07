import Image from 'next/image'

export default function Navbar(props) {

  return (
    <>
      <nav className={'navbar is-fixed-top py-2 has-background-paper has-border-sand-bottom'}>
        <div className={'navbar-brand'}>
          <span  className={'mx-2'}>
          <Image src={'/logomark.png'} width={60} height={60} layout={'fixed'} quality={100} alt={'ロゴマーク'}/>
          </span>
          <Image src={'/logotype.png'} width={150} height={60} layout={'fixed'} alt={'はまったいまー'}/>
        </div>
        {props.children}
      </nav>
      <div className={'block pt-6 mt-5'}></div>
    </>
  )
}
