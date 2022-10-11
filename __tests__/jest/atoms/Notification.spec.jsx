import { render, screen, fireEvent } from '@testing-library/react'
import Notification from '../../../src/components/atoms/Notification'

describe('Notification', () => {
  let renderResult
  let setVisible

  beforeEach(() => {
    setVisible = jest.fn()
    renderResult = render(
      <Notification close={setVisible} message={'通知バーのテスト'}/>
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('messageで渡したテストをが表示される', async () => {
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('通知バーのテスト')).toBeVisible()
  })

  test('閉じるボタンをクリックするとcloseで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByRole('button'))
    expect(setVisible).toHaveBeenCalledTimes(1)
  })
})
