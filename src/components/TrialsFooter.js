export default function TrialsFooter(props) {

  const pause = () => props.stopwatch.pause
  const handleClickEnd = () => {
    props.stopwatch.pause()
    alert(`おつかれさまでした🍵\n作成した記録を保存しておきたい時は、Gistへのエクスポート機能をご活用ください\n\n（エクスポート機能へのリンクを入れる予定）`)
  }

  return (
    <section className={'section columns'}>
      <div className={'column'}>
        <button className={'button is-dark is-fullwidth'} onClick={pause}>解決した！</button>
      </div>
      <div className={'column'}>
        <button className={'button is-light is-fullwidth'} onClick={handleClickEnd}>終了する</button>
      </div>
    </section>
  )
}
