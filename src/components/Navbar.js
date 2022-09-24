import Stopwatch from './modules/Stopwatch'
import ResetButton from './elements/ResetButton'
import Image from 'next/image'

export default function Navbar(props) {

  return (
    <>
      <nav
        className={'navbar is-fixed-top has-shadow'}
      >
        <div className={'navbar-brand'}>
          <div className={'navbar-item'}>
            <Image src={'/logo-mark.png'} width={60} height={60} alt={'はまったいまーロゴマーク'}/>
            <h1 className={'is-size-4 has-text-weight-bold mx-3 is-hidden-touch'}>
              はまったいまー
            </h1>
          </div>
        </div>
        <div className={'navbar-end'}>
          <Stopwatch stopwatch={props.stopwatch}/>
        </div>
        <div className={'navbar-end'}>
          <ResetButton stopwatch={props.stopwatch}/>
        </div>
      </nav>
      <div className={'block py-4'}></div>
    </>
  )
}
