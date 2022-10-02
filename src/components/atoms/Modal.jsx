export default function Modal({ title, confirmLabel, cancelLabel, onConfirm, onCancel, children }) {

  return (
    <div className={'modal is-active'}>
      <div className={'modal-background'} onClick={onCancel}/>
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-5'}>{title}</h1>
          <button className={'delete'} onClick={onCancel}/>
        </header>
        <section className={'modal-card-body'}>
          {children}
        </section>
        <footer className={'modal-card-foot'}>
          {confirmLabel &&
          <button className={'button is-danger'} onClick={() => {
            onConfirm()
            onCancel()
          }}>
            {confirmLabel}
          </button>
          }
          {cancelLabel &&
          <button className={'button is-light'} onClick={onCancel}>
            {cancelLabel}
          </button>
          }
        </footer>
      </div>
    </div>
  )
}
