import { useState, useEffect, useContext } from 'react';
import Modal from '../atoms/Modal';
import ModalPlain from '../atoms/ModalPlain';
import ButtonTimerControl from '../molecules/ButtonTimerControl';
import ButtonTimerStart from '../molecules/ButtonTimerStart';
import Counter from '../molecules/Counter';
import SelectLimit from '../molecules/SelectLimit';
import { StatusContext } from '../providers/StatusProvider';

export default function CountdownTimer({ timer, isExpired, setIsExpired }) {
  const { seconds, minutes, hours, restart, pause, resume, isRunning } = timer;

  const { status } = useContext(StatusContext);
  const [limit, setLimit] = useState(30);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const localTimer = JSON.parse(localStorage.getItem('timer'));
    if (!localTimer) return;

    const { seconds, minutes, hours } = localTimer;
    if (seconds + minutes + hours === 0 || isRunning) return;

    const time = new Date();
    time.setSeconds(
      time.getSeconds() + seconds + minutes * 60 + hours * 60 * 60,
    );
    restart(time, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('limit', limit);
  }, [limit]);

  useEffect(() => {
    setIsOpen(status === 0);
  }, [setIsOpen, status]);

  if (status === 1 || isExpired) {
    return (
      <>
        <Counter
          expired={limit}
          seconds={seconds}
          minutes={minutes}
          hours={hours}
          pause={pause}
          isRunning={isRunning}
        />
        <ButtonTimerControl
          pause={pause}
          resume={resume}
          isRunning={isRunning}
        />
        {isExpired && (
          <Modal
            onCancel={() => setIsExpired(false)}
            title={'調子はどうですか？'}
          >
            <div className={'content'}>
              <p className={'lh-1'}>
                {limit}分経ちました🔔
                <br />
                詰まっていたら違った切り口で取り組んでみるのも良さそうです。
              </p>
              <ul>
                <li>一旦やめて休憩する</li>
                <li>誰かに質問してみる</li>
                <li>別の実現方法はないか考えてみる</li>
              </ul>
            </div>
            <div className={'notification is-info is-light'}>
              <p className={'lh-1'}>
                時間を延長して再開したい場合は、タイマーで今より長い時間を選ぶと再開できます。
              </p>
            </div>
          </Modal>
        )}
      </>
    );
  } else {
    return (
      <>
        <SelectLimit limit={limit} setLimit={setLimit} />
        <ButtonTimerStart restart={restart} classNames={'is-light ml-2'} />
        {isOpen && (
          <ModalPlain
            onCancel={() => setIsOpen(false)}
            bgClass={'has-background-mist'}
          >
            <h1 className={'title is-size-4 has-text-centered'}>
              時間を設定して始めましょう
            </h1>
            <div className={'is-flex is-justify-content-center mt-5 mb-3'}>
              <SelectLimit
                limit={limit}
                setLimit={setLimit}
                classNames={'is-large'}
              />
              <ButtonTimerStart
                restart={restart}
                classNames={'is-large ml-4'}
              />
            </div>
          </ModalPlain>
        )}
      </>
    );
  }
}
