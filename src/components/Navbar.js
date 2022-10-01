import Image from 'next/image'

export default function Navbar(props) {

  return (
    <>
      <nav className={'navbar is-fixed-top py-3 has-border-sand-bottom has-background-paper'}>
        <div className={'navbar-brand'}>
          <Image src={'/logotype.png'} width={256} height={66} alt={'はまったいまーロゴタイプ'}/>
        </div>
        {props.stopwatch}
        {props.resetButton}
        {props.letsTryButton}
      </nav>
      <div className={'block pt-6 mt-4'}></div>
    </>
  )
}
