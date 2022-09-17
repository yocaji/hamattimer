export default function TrialsFooter(props) {

  const pause = () => props.stopwatch.pause

  return (
    <section className={'section has-text-centered'}>
      <button className={'button mr-3'} onClick={pause}>解決した！</button>
      <button className={'button'} onClick={() => props.addTrial()}>
        別の方法を試す
      </button>
    </section>
  )
}
