import Button from '../atoms/Button'

export default function ButtonLetsTrySmall() {
  return (
    <a href={'/timer'}>
      <Button classNames={'is-primary'}>
        使ってみる
      </Button>
    </a>
  )
}
