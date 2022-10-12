import Image from 'next/image'
import { IsStartedProvider } from '../providers/IsStartedProvider'
import Stopwatch from '../organisms/Stopwatch'
import ButtonSolved from '../molecules/ButtonSolved'
import ButtonReset from '../molecules/ButtonReset'
import NotificationStart from '../molecules/NotificationStart'
import CountdownTimer from '../organisms/CountdownTimer'

export default function Navbar({ stopwatch }) {

  return (
    <IsStartedProvider>
      <nav className={'navbar is-fixed-top py-1 is-primary has-background-navbar'} data-testid={'navbar-desktop'}>
        <div className={'navbar-brand mt-1'}>
          <a href={'/'}>
            <span className={'mx-2'}>
              <Image src={'/logomark.png'} width={60} height={60} layout={'fixed'} alt={'ロゴマーク'}/>
            </span>
            <Image src={'/logotype.png'} width={150} height={60} layout={'fixed'} alt={'はまったいまー'}/>
          </a>
        </div>
        <div className={'navbar-end'}>
          <div className={'navbar-item'} data-testid={'stopwatch'}>
            <CountdownTimer/>
          </div>
        </div>
        <div className={'navbar-end'}>
          <div className={'navbar-item buttons'}>
            <ButtonSolved pause={stopwatch.pause}/>
            <ButtonReset resetStopwatch={() => stopwatch.reset(0, false)}/>
          </div>
        </div>
      </nav>
      <div className={'block pt-6 pb-4 mt-5'}>
        <NotificationStart/>
      </div>
    </IsStartedProvider>
  )
}
