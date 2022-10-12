import Image from 'next/image'
import ButtonSolved from '../molecules/ButtonSolved'
import ButtonReset from '../molecules/ButtonReset'
import { useState } from 'react'

export default function NavbarTouch({ stopwatch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isActive = isMenuOpen ? ' is-active' : ''

  return (
    <>
      <nav className={'navbar is-fixed-top py-1 is-primary has-background-navbar'} data-testid={'navbar-touch'}>
        <div className={'navbar-brand'}>
          <div className={'mt-2'}>
            <a href={'/'}>
              <span className={'ml-1'}>
                <Image src={'/logomark-nega.png'} width={48} height={48} layout={'fixed'} alt={'ロゴマーク'}/>
              </span>
            </a>
          </div>
          <div className={'navbar-item'}>
          </div>
          <button className={`navbar-burger mt-1${isActive}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span/>
            <span/>
            <span/>
          </button>
        </div>
        <div className={`navbar-menu${isActive}`}>
          <div className={'navbar-item buttons has-text-centered'}>
            <ButtonSolved pause={stopwatch.pause}/>
            <ButtonReset resetStopwatch={() => stopwatch.reset(0, false)}/>
          </div>
        </div>
      </nav>
      <div className={'block pt-6 mt-5'}/>
    </>
  )
}
