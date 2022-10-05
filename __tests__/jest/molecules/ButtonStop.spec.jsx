import { render, screen, fireEvent } from '@testing-library/react'
import ButtonStop from '../../../src/components/molecules/ButtonStop'

describe('ButtonCopy', () => {
  let renderResult
  let mockFunction

  beforeEach(() => {
    mockFunction = jest.fn()
    renderResult = render(
      <ButtonStop pause={mockFunction}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('終了するボタンをクリックしたらprops.pauseで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByText('終了する'))
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  test('終了するボタンをクリックしたらモーダルが表示される', async () => {
    fireEvent.click(screen.getByText('終了する'))

    const elements = screen.getByText('おつかれさまでした🍵')
    expect(elements).toBeVisible()
  })
})
