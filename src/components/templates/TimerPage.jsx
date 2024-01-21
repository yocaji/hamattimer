import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useStopwatch } from 'react-timer-hook';
import LinkSignOut from '../molecules/LinkSignOut';
import NotificationStart from '../molecules/NotificationStart';
import PrivacyPolicy from '../molecules/PrivacyPolicy';
import Terms from '../molecules/Terms';
import Editor from '../organizations/Editor';
import Footer from '../organizations/Footer';
import Navbar from '../organizations/Navbar';
import Preview from '../organizations/Preview';
import { MarkdownProvider } from '../providers/MarkdownProvider';
import { StatusProvider } from '../providers/StatusProvider';
import { TrialsProvider } from '../providers/TrialsProvider';

export default function TimerPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const stopwatch = useStopwatch({ autoStart: false });

  useEffect(() => {
    const storedTime = JSON.parse(localStorage.getItem('stopwatch'));

    const { seconds, minutes, hours, days } = storedTime ?? {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
    const storedSeconds =
      seconds + minutes * 60 + hours * 60 * 60 + days * 60 * 60 * 24;

    const offset = new Date();
    offset.setSeconds(offset.getSeconds() + storedSeconds);
    stopwatch.reset(offset, false);
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: { tobe: '', asis: '', problem: '' },
  });

  return (
    <SessionProvider>
      <TrialsProvider>
        {isLoaded && (
          <div className={'ht-wrapper'}>
            <FormProvider {...methods}>
              <StatusProvider>
                <div className={'ht-wrapper__head'}>
                  <Navbar stopwatch={stopwatch} />
                </div>
                <div className={'ht-wrapper__main'}>
                  <NotificationStart />
                  <div className={'ht-content'}>
                    <div className={'tile is-ancestor'}>
                      <MarkdownProvider>
                        <div className={'tile is-parent is-vertical is-6'}>
                          <Editor methods={methods} />
                        </div>
                        <div className={'tile is-parent is-vertical'}>
                          <Preview />
                        </div>
                      </MarkdownProvider>
                    </div>
                  </div>
                </div>
                <div className={'ht-wrapper__foot'}>
                  <Footer>
                    <Link href={'/'} className={'mx-3'}>
                      トップページ
                    </Link>
                    ｜
                    <Terms />｜
                    <PrivacyPolicy />
                    <LinkSignOut />
                  </Footer>
                </div>
              </StatusProvider>
            </FormProvider>
          </div>
        )}
      </TrialsProvider>
    </SessionProvider>
  );
}
