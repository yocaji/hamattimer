import Link from 'next/link'
import Button from '../atoms/Button'

export default function ButtonLetsTryLarge() {
  return (
    <Link href={'timer'}>
      <Button classNames={'is-rounded is-primary is-large is-fullwidth'}>
        使ってみる
      </Button>
    </Link>
  )
}
