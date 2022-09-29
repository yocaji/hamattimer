export default function StoppedModal(props) {

  const isActive = () => props.isOpen ? 'is-active' : ''

  return (
    <>
      <div className={`modal ${isActive()}`} id={'modal-stopped'}>
        <div className={'modal-background'} onClick={() => props.setIsOpen(false)}/>
          <div className={'modal-content'}>
            <div className={'box'}>
            <p className={'mb-2'}>おつかれさまでした🍵<br/>作成した記録を保存しておきたい時は、Gistに保存する機能をご活用ください</p>
            <div className={'buttons'}>
              <button className={'button'} onClick={() => props.setIsOpen(false)}>閉じる</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
