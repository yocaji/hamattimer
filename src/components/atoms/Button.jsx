export default function Button({ classNames, onClick, children }) {
  return(
    <button onClick={onClick} className={`button ${classNames}`}>
      {children}
    </button>
  )
}
