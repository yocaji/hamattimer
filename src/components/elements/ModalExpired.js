export default function ModalExpired(props) {
  return (
    <>
      <section className={'modal-card-body'}>
        <div className={'content'}>
          <p className={'lh-1'}>{props.limit}分経ちました🔔<br/>詰まっていたら違った切り口で取り組んでみるのも良さそうです。</p>
          <ul>
            <li>一旦やめて休憩する</li>
            <li>誰かに質問してみる</li>
            <li>別の実現方法はないか考えてみる</li>
          </ul>
          <p className={'lh-1'}>時間を延長して再開したい場合は、タイマーで今より長い時間を選ぶと再開できます。</p>
        </div>
      </section>
      <footer className={'modal-card-foot'}/>
    </>
  )
}
