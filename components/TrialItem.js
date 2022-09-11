import { MdDelete } from 'react-icons/md'

export default function TrialItem(props) {
  return (
    <section className={'section'}>
      <div className={'box'}>
        <h2 className={'title is-5'}>試したこと{props.trial.id}</h2>
        <button className={'button'} onClick={() => props.remove()}>
          <MdDelete />
        </button>
        <form>
          <div className={'field'}>
            <label className={'label'}>考えたことや調べたこと</label>
            <div className={'control'}>
              <textarea
                className={'textarea'}
                defaultValue={props.trial.guess}
              />
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>やったこと</label>
            <div className={'control'}>
              <textarea
                className={'textarea'}
                defaultValue={props.trial.operation}
              />
            </div>
          </div>
          <div className={'field'}>
            <label className={'label'}>結果</label>
            <div className={'control'}>
              <textarea
                className={'textarea'}
                defaultValue={props.trial.result}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
