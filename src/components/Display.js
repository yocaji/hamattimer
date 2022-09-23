import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { MarkdownProvider } from './providers/MarkdownProvider'
import Navbar from './Navbar'
import Editor from './Editor'
import Preview from './Preview'
import Footer from './Footer'

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
      <div className={'columns is-gapless is-multiline'}>
        <MarkdownProvider>
          <div className={'column is-half hero is-fullheight aside'}>
            <section className={'section'}>
              <Editor methods={methods} stopwatch={stopwatch}/>
            </section>
          </div>
          <div className={'column is-half hero is-fullheight'}>
            <Preview/>
          </div>
        </MarkdownProvider>
        <div className={'column is-full'}>
          <Footer/>
        </div>
      </div>
    </>
  )
}
