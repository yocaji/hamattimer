import GistButton from '../elements/GistButton'
import CopyButton from '../elements/CopyButton'

export default function ExportButtons() {

  return (
    <>
      <div className={'buttons is-right has-addons'}>
        <CopyButton/>
        <GistButton/>
      </div>
      <hr/>
    </>
  )
}
