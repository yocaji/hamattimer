import Button from '../atoms/Button'

export default function ButtonStart({ start, addTrial, setIsStarted }) {

  const handleClick = () => {
    start()
    addTrial()
    setIsStarted(true)
  }

  return (
    <div className={'has-text-centered'}>
      <Button
        onClick={() => handleClick()}
        classNames={'is-primary is-rounded is-medium px-6 has-text-weight-bold is-family-secondary'}
      >
        スタート
      </Button>
    </div>
  )
}
