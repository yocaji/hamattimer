export default function ExpiredModal(props) {

  const isActive = () => props.isOpen ? 'is-active' : ''
  const limit = () => JSON.parse(localStorage.getItem('issue')).limit

  return (
    <>
      <div className={`modal ${isActive()}`}>
        <div className={'modal-background'} onClick={() => props.setIsOpen(false)}/>
          <div className={'modal-content'}>
            <div className={'box'}>
            <p className={'mb-2'}>{limit()}分経ちました</p>
            <div className={'buttons'}>
              <button className={'button'} onClick={() => props.setIsOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
