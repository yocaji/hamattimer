import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { useStopwatch } from 'react-timer-hook'
import { FormProvider, useForm } from 'react-hook-form'
import { TrialsProvider } from '../providers/TrialsProvider'
import { MarkdownProvider } from '../providers/MarkdownProvider'
import Navbar from '../organizations/Navbar'
import Editor from '../organizations/Editor'
import Preview from '../organizations/Preview'
import Footer from '../organizations/Footer'

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
    defaultValues: { 'tobe': '', 'asis': '', 'problem': '' },
  })

  return (
    <SessionProvider>
      <TrialsProvider>
        {isLoaded &&
          <>
            <FormProvider {...methods}>
              <Navbar stopwatch={stopwatch}/>
            </FormProvider>
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
