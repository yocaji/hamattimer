import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { TrialsProvider } from '../providers/TrialsProvider'
import { MarkdownProvider } from '../providers/MarkdownProvider'
import ButtonReset from '../molecules/ButtonReset'
import ButtonSolved from '../molecules/ButtonSolved'
import Navbar from '../organizations/Navbar'
import Editor from '../organizations/Editor'
import Preview from '../organizations/Preview'
import Footer from '../organizations/Footer'
import Stopwatch from '../organizations/Stopwatch'

export default function TimerPage() {

  const [isLoaded, setIsLoaded] = useState(false)

  const stopwatch = useStopwatch({ autoStart: false })

  useEffect(() => {
    const storedTime = JSON.parse(localStorage.getItem('stopwatch'))

    const { seconds, minutes, hours, days } = storedTime ?? { seconds: 0, minutes: 0, hours: 0, days: 0 }
    const storedSeconds = seconds + minutes * 60 + hours * 60 * 60 + days * 60 * 60 * 24

    const offset = new Date()
    offset.setSeconds(offset.getSeconds() + storedSeconds)
    stopwatch.reset(offset, false)
    setIsLoaded(true)
  }, [])

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      'tobe': '',
      'asis': '',
      'problem': '',
    },
  })

  return (
    <SessionProvider>
      <TrialsProvider>
        {isLoaded &&
          <>
            <Navbar>
              <div className={'navbar-end'}>
                <div className={'navbar-item'} data-test-id={'stopwatch'}>
                  <Stopwatch stopwatch={stopwatch}/>
                </div>
              </div>
              <div className={'navbar-end'}>
                <div className={'navbar-item buttons'}>
                  <ButtonSolved pause={stopwatch.pause}/>
                  <FormProvider {...methods}>
                    <ButtonReset resetStopwatch={() => stopwatch.reset(0, false)}/>
                  </FormProvider>
                </div>
              </div>
            </Navbar>
            <div className={'has-background-myst px-6 pb-6'}>
              <div className={'tile is-ancestor'}>
                <MarkdownProvider>
                  <div className={'tile is-parent is-vertical is-6'}>
                    <Editor methods={methods}/>
                  </div>
                  <div className={'tile is-parent is-vertical'}>
                    <Preview/>
                  </div>
                </MarkdownProvider>
              </div>
            </div>
            <Footer/>
          </>
        }
      </TrialsProvider>
    </SessionProvider>
  )
}
