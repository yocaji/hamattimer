import Button from '../atoms/Button'

export default function ButtonLetsTryNega() {
  return (
    <a href={'/timer'}>
      <Button classNames={'is-primary is-light is-rounded is-large is-family-secondary has-text-weight-bold px-6'}>
        使ってみる
      </Button>
    </a>
  )
}
