export default function Modal({ title, onClose, onConfirm, confirmLabel, children }) {

  return (
    <div className={'modal is-active'}>
      <div className={'modal-background'} onClick={onClose}/>
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-5'}>{title}</h1>
          <button className={'delete'} onClick={onClose}/>
        </header>
        <section className={'modal-card-body'}>
          {children}
        </section>
        <footer className={'modal-card-foot'}>
          <button className={'button is-danger'} onClick={() => {
            onConfirm()
            onClose()
          }}>{confirmLabel}
          </button>
          <button className={'button is-light'} onClick={onClose}>やめる
          </button>
        </footer>
      </div>
    </div>
  )
}
