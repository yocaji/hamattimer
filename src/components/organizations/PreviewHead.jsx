import ButtonGist from '../molecules/ButtonGist'
import ButtonCopy from '../molecules/ButtonCopy'

export default function PreviewHead() {

  return (
    <div className={'columns is-variable is-1'}>
      <div className={'column is-6'}>
      </div>
      <div className={'column is-3'}>
        <ButtonCopy/>
      </div>
      <div className={'column is-3'}>
        <ButtonGist/>
      </div>
    </div>
  )
}
