import { useState } from 'react'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'

export default function ButtonSolved({ pause }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    pause()
    setIsOpen(true)
  }

  return (
    <>
      <Button
        onClick={() => handleClick()}
        classNames={'is-primary is-light is-medium is-fullwidth'}
      >
        解決した！
      </Button>
      {isOpen &&
        <Modal
          onCancel={() => setIsOpen(false)}
          title={'おつかれさまでした🎉'}
        >
          <div className={'notification is-info is-light'}>
            <p className={'lh-1'}>作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができて便利です💡</p>
          </div>
        </Modal>
      }
    </>
  )
}
