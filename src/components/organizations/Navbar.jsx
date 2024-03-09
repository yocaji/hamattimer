import Image from 'next/image';
import { useContext, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import ButtonReset from '../molecules/ButtonReset';
import ButtonSolved from '../molecules/ButtonSolved';
import CountdownTimer from '../organisms/CountdownTimer';
import { StatusContext } from '../providers/StatusProvider';

export default function Navbar() {
  const { setStatus, statuses } = useContext(StatusContext);
  const [isExpired, setIsExpired] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = isMenuOpen ? ' is-active' : '';

  const timer = useTimer({
    expiryTimestamp: Date.now(),
    autoStart: false,
    onExpire: () => {
      setIsExpired(true);
      setStatus(statuses.interval);
    },
  });
  const { pause } = timer;

  return (
    <>
      <nav
        className={'navbar is-fixed-top py-1 is-primary has-background-navbar'}
        data-testid={'navbar-desktop'}
      >
        <div className={'navbar-brand mt-1'}>
          <a href={'/'}>
            <span className={'mx-2'}>
              <Image
                src={'/logomark.png'}
                width={60}
                height={60}
                alt={'ロゴマーク'}
              />
            </span>
            <span className={'is-hidden-touch'}>
              <Image
                src={'/logotype.png'}
                width={150}
                height={60}
                alt={'はまったいまー'}
              />
            </span>
          </a>
          <div className={'navbar-item is-hidden-desktop'}>
            <CountdownTimer
              timer={timer}
              isExpired={isExpired}
              setIsExpired={setIsExpired}
            />
          </div>
          <button
            className={`navbar-burger mt-1${isActive}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu${isActive}`}>
          <div
            className={'navbar-end is-hidden-touch'}
            data-testid={'timer-desktop'}
          >
            <div className={'navbar-item'}>
              <CountdownTimer
                timer={timer}
                isExpired={isExpired}
                setIsExpired={setIsExpired}
              />
            </div>
          </div>
          <div className={'navbar-end'}>
            <div className={'navbar-item'}>
              <ButtonSolved pause={pause} />
              <ButtonReset />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
