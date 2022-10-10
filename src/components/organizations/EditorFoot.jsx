import ButtonSolved from '../molecules/ButtonSolved'
import ButtonStop from '../molecules/ButtonStop'

export default function EditorFoot({ pause }) {

  return (
    <div className={'columns'}>
      <div className={'column'}>
        <ButtonSolved pause={pause}/>
      </div>
      <div className={'column'}>
        <ButtonStop pause={pause}/>
      </div>
    </div>
  )
}
