export default function Modal(props) {

  const isActive = () => props.isOpen ? 'is-active' : ''

  return (
    <div className={`modal ${isActive()}`}>
      <div className={'modal-background'} onClick={() => props.setIsOpen(false)}/>
      <div className={'modal-card'}>
        <header className={'modal-card-head'}>
          <h1 className={'modal-card-title is-size-5'}>{props.title}</h1>
          <button className={'delete'} onClick={() => props.setIsOpen(false)}/>
        </header>
        {props.children}
      </div>
    </div>
  )
}
