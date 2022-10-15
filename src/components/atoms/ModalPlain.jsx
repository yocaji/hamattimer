export default function ModalPlain({ onCancel, children, bgClass }) {
  return (
    <div className={'modal is-active has-text-left'}>
      <div className={'modal-background'} onClick={onCancel} />
      <div className={`modal-content box ${bgClass}`}>{children}</div>
    </div>
  );
}
