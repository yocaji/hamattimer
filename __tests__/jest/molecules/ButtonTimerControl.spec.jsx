import { render, screen, fireEvent } from '@testing-library/react'
import ButtonTimerControl from '../../../src/components/molecules/ButtonTimerControl'

describe('ButtonTimerControl', () => {
  let renderResult
  let resume, pause

  beforeEach(() => {
    resume = jest.fn()
    pause = jest.fn()
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('再生中にボタンをクリックするとpauseメソッドが呼ばれる', async () => {
    renderResult = render(
      <ButtonTimerControl pause={pause} resume={resume} isRunning={true}/>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(pause).toHaveBeenCalledTimes(1)
  })

  test('一時停止中にボタンをクリックするとstartメソッドが呼ばれる', async () => {
    renderResult = render(
      <ButtonTimerControl pause={pause} resume={resume} isRunning={false}/>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(resume).toHaveBeenCalledTimes(1)
  })
})
