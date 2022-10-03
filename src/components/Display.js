import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { MarkdownProvider } from './providers/MarkdownProvider'
import Navbar from './organizations/Navbar'
import Editor from './organizations/Editor'
import Preview from './organizations/Preview'
import Footer from './organizations/Footer'
import Stopwatch from './organizations/Stopwatch'
import ButtonReset from './molecules/ButtonReset'

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
    },
  })

  return (
    <>
      <Navbar>
        <div className={'navbar-end'}>
          <div className={'navbar-item'} id={'stopwatch'}>
            <Stopwatch stopwatch={stopwatch}/>
          </div>
        </div>
        <div className={'navbar-end'}>
          <div className={'navbar-item'}>
            <FormProvider {...methods}>
              <ButtonReset resetStopwatch={() => stopwatch.reset(0, false)}/>
            </FormProvider>
          </div>
        </div>
      </Navbar>
      <div className={'columns is-gapless is-multiline has-background-paper'}>
        <MarkdownProvider>
          <div className={'column is-half hero is-fullheight'}>
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
