export default function ModalPlain({ onCancel, children }) {
  return (
    <div className={'modal is-active has-text-left'}>
      <div className={'modal-background'} onClick={onCancel} />
      <div className={'modal-content box'}>{children}</div>
    </div>
  )
}
