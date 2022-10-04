import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../../../src/components/atoms/Modal'

describe('Modal', () => {
  let renderResult
  let handleConfirm
  let handleCancel

  beforeEach(() => {
    handleConfirm = jest.fn()
    handleCancel = jest.fn()
    renderResult = render(
      <Modal title={'タイトル'}
             confirmLabel={'実行する'} cancelLabel={'中止する'}
             onConfirm={handleConfirm} onCancel={handleCancel}>
        <div>メッセージ</div>
      </Modal>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('実行ボタンをクリックするとonConfirmが呼ばれる', async () => {
    fireEvent.click(screen.getByText('実行する'))
    expect(handleConfirm).toHaveBeenCalledTimes(1)
  })
})
