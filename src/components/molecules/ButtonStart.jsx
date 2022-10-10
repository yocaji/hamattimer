import { format } from 'date-fns'
import Button from '../atoms/Button'

export default function ButtonStart({ start }) {

  const handleClick = () => {
    start()
    const timestamp = format(Date.now(), 'yyyy年M月d日HH時mm分開始')
    localStorage.setItem('started_at', timestamp)
  }

  return (
    <div className={'has-text-centered'}>
      <Button
        onClick={() => handleClick()}
        classNames={'is-primary is-light has-text-weight-bold is-family-secondary'}
      >
        スタート
      </Button>
    </div>
  )
}
