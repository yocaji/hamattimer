import { useState } from 'react'
import ButtonStopwatch from '../molecules/ButtonStopwatch'
import SelectLimit from '../molecules/SelectLimit'
import Counter from './Counter'

export default function Stopwatch(props) {

  const [limit, setLimit] = useState(30)

  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'} id={'stopwatch'}>
        <ButtonStopwatch stopwatch={props.stopwatch}/>
        <Counter stopwatch={props.stopwatch} limit={limit}/>
        <SelectLimit limit={limit} setLimit={() => setLimit()}/>
      </div>
    </div>
  )
}
