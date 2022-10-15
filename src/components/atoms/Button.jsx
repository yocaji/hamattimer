export default function Button({ classNames, onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`button ${classNames}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
