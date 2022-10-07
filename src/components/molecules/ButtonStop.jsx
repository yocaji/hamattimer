import { useState } from 'react'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'

export default function ButtonStop({ pause }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    pause()
    setIsOpen(true)
  }

  return (
    <>
      <Button
        onClick={() => handleClick()}
        classNames={'is-primary is-light is-rounded is-medium is-fullwidth has-text-weight-bold is-family-secondary'}
      >
        終了する
      </Button>
      {isOpen &&
        <Modal
          onCancel={() => setIsOpen(false)}
          title={'おつかれさまでした🍵'}
        >
          <p className={'lh-1'}>時間を置いてみると新しいひらめきで解決するかも👍</p>
          <div className={'notification is-info is-light'}>
            <p className={'lh-1'}>作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができて便利です💡</p>
          </div>
        </Modal>
      }
    </>
  )
}
