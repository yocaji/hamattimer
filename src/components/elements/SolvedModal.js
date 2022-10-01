export default function SolvedModal(props) {

  const isActive = () => props.isOpen ? 'is-active' : ''

  return (
    <div className={`modal ${isActive()}`}>
      <div className={'modal-background'} onClick={() => props.setIsOpen(false)}/>
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-5'}>おつかれさまでした🎉</h1>
          <button className={'delete'} onClick={() => props.setIsOpen(false)}/>
        </header>
        <section className={'modal-card-body'}>
          <div className={'notification is-info is-light'}>
            <p className={'lh-1'}>作成した記録をGistに保存しておくと、あとから必要になった時に見返すことができて便利です💡</p>
          </div>
        </section>
        <footer className={'modal-card-foot'}/>
      </div>
    </div>
  )
}
