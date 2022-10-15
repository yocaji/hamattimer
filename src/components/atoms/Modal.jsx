export default function Modal({
  title,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  children,
}) {
  return (
    <div className={'modal is-active'}>
      <div className={'modal-background'} onClick={onCancel} />
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-6 has-text-weight-bold'}>
            {title}
          </h1>
          <button className={'delete'} onClick={onCancel} />
        </header>
        <section className={'modal-card-body has-text-navy'}>
          {children}
        </section>
        <footer className={'modal-card-foot'}>
          {confirmLabel && (
            <button
              className={'button is-danger'}
              onClick={() => {
                onConfirm()
                onCancel()
              }}
            >
              {confirmLabel}
            </button>
          )}
          <button
            className={'button is-white is-shadowless'}
            onClick={onCancel}
          >
            {cancelLabel ?? 'とじる'}
          </button>
        </footer>
      </div>
    </div>
  )
}
