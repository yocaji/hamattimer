import Stopwatch from './modules/Stopwatch'
import ResetButton from './elements/ResetButton'

export default function Navbar(props) {

  return (
    <>
      <nav
        className={'navbar is-fixed-top has-shadow'}
        role={'navigation'}
        aria-label={'dropdown navigation'}
      >
        <div className={'navbar-brand'}>
          <h1 className={'navbar-item is-size-4 has-text-weight-bold'}>
            はまったいまー
          </h1>
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
