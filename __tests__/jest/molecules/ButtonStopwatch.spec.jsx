import { render, screen, fireEvent } from '@testing-library/react'
import { IsStartedProvider } from '../../../src/components/providers/IsStartedProvider'
import ButtonStopwatch from '../../../src/components/molecules/ButtonStopwatch'

describe('ButtonStopwatch', () => {
  //
  let renderResult
  let start, pause

  beforeEach(() => {
    start = jest.fn()
    pause = jest.fn()
  })

  afterEach(() => {
    renderResult.unmount()
  })

  test('再生中にボタンをクリックするとpauseメソッドが呼ばれる', async () => {
    renderResult = render(
      <IsStartedProvider>
        <ButtonStopwatch start={start} pause={pause} isRunning={true}/>,
      </IsStartedProvider>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(pause).toHaveBeenCalledTimes(1)
  })

  test('一時停止中にボタンをクリックするとstartメソッドが呼ばれる', async () => {
    renderResult = render(
      <IsStartedProvider>
        <ButtonStopwatch start={start} pause={pause} isRunning={false}/>,
      </IsStartedProvider>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(start).toHaveBeenCalledTimes(1)
  })
})
