import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { MarkdownProvider } from '../providers/MarkdownProvider'
import { IsStartedProvider } from '../providers/IsStartedProvider'
import { TrialsProvider } from '../providers/TrialsProvider'
import ButtonReset from '../molecules/ButtonReset'
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
      <IsStartedProvider>
        <TrialsProvider>
          <Navbar>
            <div className={'navbar-end'}>
              <div className={'navbar-item'} id={'stopwatch'}>
                {isLoaded &&
                  <Stopwatch stopwatch={stopwatch}/>
                }
              </div>
            </div>
            <div className={'navbar-end'}>
              <div className={'navbar-item'}>
                <FormProvider {...methods}>
                  {isLoaded &&
                    <ButtonReset resetStopwatch={() => stopwatch.reset(0, false)}/>
                  }
                </FormProvider>
              </div>
            </div>
          </Navbar>
          <div className={'columns is-gapless is-multiline has-background-paper'}>
            <MarkdownProvider>
              <div className={'column is-half hero is-fullheight'}>
                <section className={'section'}>
                  {isLoaded &&
                    <Editor methods={methods} stopwatch={stopwatch}/>
                  }
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
        </TrialsProvider>
      </IsStartedProvider>
    </SessionProvider>
  )
}
