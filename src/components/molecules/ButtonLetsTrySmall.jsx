import Link from 'next/link'
import Button from '../atoms/Button'

export default function ButtonLetsTrySmall() {
  return (
    <Link href={'timer'}>
      <Button classNames={'is-rounded is-primary'}>
        使ってみる
      </Button>
    </Link>
  )
}
