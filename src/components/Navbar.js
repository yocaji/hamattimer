import Timer from './Timer'
import ExportBtn from './ExportBtn'
import DeleteBtn from './DeleteBtn'
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
          <Timer watch={props.watch}/>
        </div>
        <div className={'navbar-end'}>
          <DeleteBtn/>
          <ExportBtn/>
          <GitHubIcon/>
        </div>
      </nav>
      <div className={'block py-3'}></div>
    </>
  )
}
