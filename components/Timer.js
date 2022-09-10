import { MdPause, MdPlayArrow } from 'react-icons/md'

export default function Timer(props) {
  const label = props.isRunning ? <MdPause /> : <MdPlayArrow />
  const action = () => {
    props.isRunning ? props.pause() : props.start()
  }
  const pad0 = (number) => {
    return number.toString().padStart(2, '0')
  }

  return (
    <>
      <div className={'navbar-item'}>
        <div className={'is-size-5 mr-3'}>
          {props.days * 24 + props.hours}:{pad0(props.minutes)}:
          {pad0(props.seconds)}
        </div>
        <button onClick={action} className={'button is-small'}>
          {label}
        </button>
      </div>
    </>
  )
}
