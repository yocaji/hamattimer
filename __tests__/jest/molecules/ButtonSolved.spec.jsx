import { render, screen, fireEvent } from '@testing-library/react'
import ButtonSolved from '../../../src/components/molecules/ButtonSolved'

describe('ButtonSolved', () => {
  let renderResult
  let mockFunction

  beforeEach(() => {
    mockFunction = jest.fn()
    renderResult = render(
      <ButtonSolved pause={mockFunction}/>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('解決したボタンをクリックしたらprops.pauseで渡した関数が呼ばれる', async () => {
    fireEvent.click(screen.getByText('解決した！'))
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  test('解決したボタンをクリックしたらモーダルが表示される', async () => {
    fireEvent.click(screen.getByText('解決した！'))

    const elements = screen.getByText('おつかれさまです🎉')
    expect(elements).toBeVisible()
  })
})
