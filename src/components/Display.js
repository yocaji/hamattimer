import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { MarkdownProvider } from './providers/MarkdownProvider'
import Navbar from '../components/Navbar'
import Editor from '../components/Editor'
import Preview from '../components/Preview'

export default function Display() {

  const offset = new Date()
  const storedTime = JSON.parse(localStorage.getItem('stopwatch'))
  // const [storedTime, setStoredTime] = useState('')
  // useEffect(() => {
  //   setStoredTime(JSON.parse(localStorage.getItem('stopwatch')))
  //   console.log(storedTime)
  // }, [setStoredTime])

  if (storedTime) {
    const { seconds, minutes, hours, days } = storedTime ?? { seconds: 0, minutes: 0, hours: 0, days: 0 }
    const storedSeconds = seconds + minutes * 60 + hours * 60 * 60 + days * 60 * 60 * 24
    offset.setSeconds(offset.getSeconds() + storedSeconds)
  }
  const stopwatch = useStopwatch({ autoStart: false, offsetTimestamp: offset })

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      'tobe': '',
      'asis': '',
      'problem': '',
      'limit': '30',
    },
  })

  return (
    <>
      <FormProvider {...methods}>
        <Navbar stopwatch={stopwatch}/>
      </FormProvider>
      <div className={'columns is-gapless'}>
        <MarkdownProvider>
          <div className={'column'}>
            <Editor methods={methods} stopwatch={stopwatch}/>
          </div>
          <div className={'column content'}>
            <Preview/>
          </div>
        </MarkdownProvider>
      </div>
    </>
  )
}
