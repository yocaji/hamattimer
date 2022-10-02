import ControlButton from '../elements/ControlButton'
import SelectLimit from '../elements/SelectLimit'
import Counter from './Counter'

export default function Stopwatch(props) {

  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'} id={'stopwatch'}>
        <ControlButton stopwatch={props.stopwatch}/>
        <Counter stopwatch={props.stopwatch}/>
        <SelectLimit/>
      </div>
    </div>
  )
}
