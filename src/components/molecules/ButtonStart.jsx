import Button from '../atoms/Button'

export default function ButtonStart({ start, addTrial, setIsStarted }) {

  const handleClick = () => {
    start()
    addTrial()
    setIsStarted(true)
  }

  return (
    <div className={'has-text-right'}>
      <Button
        onClick={() => handleClick()}
        classNames={'is-primary is-light is-medium is-fullwidth'}
      >
        スタート
      </Button>
    </div>
  )
}
