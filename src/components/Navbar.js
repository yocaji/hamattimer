import Timer from './Timer'
import ExportBtn from './ExportBtn'
import ResetBtn from './ResetBtn'
import GitHubIcon from './GitHubIcon'

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
        <div className={'navbar-start'}>
          <Timer stopwatch={props.stopwatch}/>
        </div>
        <div className={'navbar-end'}>
          <ResetBtn stopwatch={props.stopwatch}/>
          <ExportBtn/>
          <GitHubIcon/>
        </div>
      </nav>
      <div className={'block py-3'}></div>
    </>
  )
}
