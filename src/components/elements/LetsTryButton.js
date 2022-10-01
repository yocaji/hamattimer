import Link from 'next/link'

export default function LetsTryButton() {
  return (
    <div className={'navbar-end'}>
      <div className={'navbar-item'}>
        <Link href={'timer'}>
          <button className={'button is-rounded is-primary'}>
            使ってみる
          </button>
        </Link>
      </div>
    </div>
  )
}
