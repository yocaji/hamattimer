import { useContext } from 'react'
import { IsStartedContext } from '../providers/IsStartedProvider'
import ButtonStart from '../molecules/ButtonStart'
import ButtonSolved from '../molecules/ButtonSolved'
import ButtonStop from '../molecules/ButtonStop'

export default function EditorFoot({start, pause, addTrial}) {

  const { isStarted, setIsStarted } = useContext(IsStartedContext)

  return (
    <>
      {!isStarted &&
        <ButtonStart start={start} addTrial={addTrial} setIsStarted={setIsStarted}/>
      }
      {isStarted &&
        <div className={'columns'}>
          <div className={'column'}>
            <ButtonSolved pause={pause}/>
          </div>
          <div className={'column'}>
            <ButtonStop pause={pause}/>
          </div>
        </div>
      }
    </>
  )
}
