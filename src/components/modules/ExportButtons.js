import GistButton from '../elements/GistButton'
import CopyButton from '../elements/CopyButton'
import GistAuthMessage from '../elements/GistAuthMessage'

export default function ExportButtons() {

  return (
    <>
      <GistAuthMessage/>
      <div className={'buttons is-right has-addons'}>
        <CopyButton/>
        <GistButton/>
      </div>
    </>
  )
}
