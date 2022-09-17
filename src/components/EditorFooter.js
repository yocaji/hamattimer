export default function EditorFooter(props) {

  const handleClickEnd = () => {
    props.pause()
    alert(`おつかれさまでした🍵\n作成した記録を保存しておきたい時は、Gistへのエクスポート機能をご活用ください\n\n（エクスポート機能へのリンクを入れる予定）`)
  }

  return (
    <div className={'columns'}>
      <div className={'column'}>
        <button className={'button is-dark is-fullwidth'} onClick={props.pause}>解決した！</button>
      </div>
      <div className={'column'}>
        <button className={'button is-light is-fullwidth'} onClick={handleClickEnd}>終了する</button>
      </div>
    </div>
  )
}
